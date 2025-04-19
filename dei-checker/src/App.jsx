import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './frontend/Home/Home';
import Footer from './frontend/Footer/Footer';
import Navbar from './frontend/Navbar/Navbar';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Footer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
