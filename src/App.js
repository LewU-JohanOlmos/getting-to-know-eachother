import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hero from './components/Hero';
import Bio from './components/Bio';
import Class from './components/Class';

import {NextUIProvider} from "@nextui-org/react";
import Footer from './components/Footer';
import Duties from './components/Duties';


function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Hero/>
        <Bio/>
        <Duties/>
        <Class/>
        <Footer/>
      </BrowserRouter>
    </NextUIProvider>
      
  );
}

export default App;
