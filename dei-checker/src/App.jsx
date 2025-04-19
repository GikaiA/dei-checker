import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { useState, useEffect } from 'react';

function App() {
  const [deiContent, setDeiContent] = useState(null);

  const fetchDeiContent = async (url) => {
    try {
      const response = await fetch('/api/extract-dei', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setDeiContent(data.deiContent);
    } catch (error) {
      console.error('Error fetching DEI content:', error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home onFetchDei={fetchDeiContent} deiContent={deiContent}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
