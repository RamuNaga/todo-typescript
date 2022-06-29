import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComponent from './auth/login';
import Home from './components/Home';




const App: React.FC = () => {
 
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
