import { useState } from 'react'
import React from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import Home from './components/home';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
