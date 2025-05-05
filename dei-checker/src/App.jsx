import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
