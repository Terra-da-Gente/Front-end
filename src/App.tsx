import React from 'react';
import Home from './pages/home/Home';
import Sobrenos from './pages/sobrenos/Sobrenos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobrenos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;