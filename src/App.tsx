import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;
import Navbar from './components/estaticos/navbar/Navbar';
import './App.css';
import Footer from './components/estaticos/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
