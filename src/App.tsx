import React from 'react';
import Home from './pages/home/Home';
import Sobrenos from './pages/sobrenos/Sobrenos';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;
import Navbar from './components/estaticos/navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
    <Sobrenos />
    <Router>
      <Navbar />
    </Router>
    </>
  );
}

export default App;
