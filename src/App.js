import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Footer, Header, Navbar, OmenuDescription, OmenuHeader, Products, OmenuFeatures, OmenuUnique, OmenuUse, OmenuSubscription, OmenuAugment, OfoodSubscription } from './containers';

const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/omenu" element={<Omenu />} />
          <Route path="/ofood" element={<Ofood />} />
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
        <div className='gray__bg'>
          <OmenuDescription/>
          <OmenuFeatures/>  
        </div>
        <div className='black__bg'>
          <OmenuUnique/>
          <OmenuUse/>
        </div>
        <div className='gray__bg'>
          <OmenuSubscription/>
          <OmenuAugment/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

function Ofood() {
  return (
    <>
      <OfoodSubscription/>
    </>
  )
}

export default App