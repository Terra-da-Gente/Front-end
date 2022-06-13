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
import CadastroProduto from './components/produtos/cadastrarProduto/CadastroProduto';
import { Provider } from 'react-redux';
import store from './store/store';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/cart/Cart';
import Cards from './pages/sobrenos/cards/Cards';

function App() {
  return (
      <Provider store={store}>
        <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobrenos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path='/categoria' element={<ListaCategoria />} />
            <Route path="/produtos" element={<ListaProduto />} />
            <Route path="/formularioProduto" element={<CadastroProduto />} />
            <Route path="/deletarProduto" element={<DeletarProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/formularioProduto/:id" element={<CadastroProduto />} />            
            <Route path="/formularioCategoria" element={<CadastrarCategoria />} />
            <Route path="/formularioCategoria/:id" element={<CadastrarCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/carrinho/:id" element={<Cart/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
      </Provider>
  );
}


export default App;