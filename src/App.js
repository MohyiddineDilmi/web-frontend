import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Footer, Header, Navbar, OmenuDescription, OmenuHeader, Products } from './containers';

const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/omenu" element={<Omenu />} />
      </Routes>
    </div>
  )
}

function Home() {
  return (
    <>
      <div>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Products/>
        <Footer/>
      </div>
    </>
  );
}

function Omenu() {
  return (
    <>
      <div>
        <div className='gradient__bg'>
          <Navbar/>
          <OmenuHeader/> 
        </div>
        <OmenuDescription/>
        <Footer/>
      </div>
    </>
  );
}

export default App