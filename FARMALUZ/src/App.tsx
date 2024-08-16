import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Navbar from './components/NavBar/NavBar'

function App() {


  return (
    <>
    <BrowserRouter>
    <Footer/>
    <Navbar/>
    <Home/>
    </BrowserRouter>
    </>
  )
}

export default App
