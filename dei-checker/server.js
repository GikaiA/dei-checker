import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { createRequire } from "module";
import { OpenAI } from "openai";

dotenv.config();
const require = createRequire(import.meta.url);
const getText = require("web-to-text");

const app = express();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(bodyParser.json());

app.post("/api/extract-dei", async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required." });

  try {
    const { text } = await getText(url);

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You're a DEI policy extractor. Only extract and return content related to diversity, equity, inclusion, accessibility, and belonging.",
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    res.json({ deiContent: completion.choices[0].message.content });
  } catch (err) {
    console.error("Error extracting DEI content:", err);
    res.status(500).json({ error: "Failed to extract DEI content." });
  }
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is running on http://localhost:3000")
);
