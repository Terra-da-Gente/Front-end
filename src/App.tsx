import React from 'react';
import Home from './pages/home/Home';
import Sobrenos from './pages/sobrenos/Sobrenos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import CadastrarCategoria from './components/categoria/cadastrarCategoria/CadastrarCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobrenos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path='/categoria' element={<ListaCategoria />} />
            <Route path="/formularioCategoria" element={<CadastrarCategoria />} />
            <Route path="/formularioCategoria/:id" element={<CadastrarCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;