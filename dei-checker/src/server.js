import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

ViteExpress.listen(app, 3000, () =>
  console.log("Server is running on http://localhost:3000")
);
