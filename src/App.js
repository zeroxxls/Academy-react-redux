import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//pages
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
//components
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

const App =()=>{
  return(
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Main/>
      <Footer/>
    </Router>
    </div>
  )
}

export default App
