import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  let history = useNavigate();

  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
    // alert("Usuario deslogado")
    toast.info('Usuario deslogado!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
    history('/home')
  }

  var navbarComponent;

  if (token === "") {
    navbarComponent = <AppBar position="static" className="back" >
      <Toolbar variant="dense" className="font">
        <Box className="cursor" >
          <Typography variant="h6" color="inherit" className="cursor" >
            Terra da Gente
          </Typography>
        </Box>

        <Box display="flex" justifyContent="start">

          <Link to='/home' className="text-decorator-none">
            <Box mx={1} className="cursor ">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
          </Link>

          <Link to='/produtos' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Produtos
              </Typography>
            </Box>
          </Link>

          <Link to='/sobre' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Sobre Nós
              </Typography>
            </Box>
          </Link>

          <Link to='/categoria' className="text-decorator-none">
            <Box mx={1} className="cursor ">
              <Typography variant="h6" color="inherit">
                Categorias
              </Typography>
            </Box>
          </Link>

          <Link to='/login' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Login
              </Typography>
            </Box>
          </Link>

        </Box>

      </Toolbar>
    </AppBar>
  } else {
    navbarComponent = <AppBar position="static" className="back" >
      <Toolbar variant="dense" className="font">
        <Box className="cursor" >
          <Typography variant="h6" color="inherit" className="cursor" >
            Terra da Gente
          </Typography>
        </Box>

        <Box display="flex" justifyContent="start">

          <Link to='/home' className="text-decorator-none">
            <Box mx={1} className="cursor ">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
          </Link>

          <Link to='/produtos' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Produtos
              </Typography>
            </Box>
          </Link>

          <Link to='/sobre' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Sobre Nós
              </Typography>
            </Box>
          </Link>

          <Link to='/categoria' className="text-decorator-none">
            <Box mx={1} className="cursor ">
              <Typography variant="h6" color="inherit">
                Categorias
              </Typography>
            </Box>
          </Link>


          <Link to='/formularioCategoria' className="text-decorator-none">
            <Box mx={1} className="cursor ">
              <Typography variant="h6" color="inherit">
                Cadastrar Categoria
              </Typography>
            </Box>
          </Link>

          <Link to='/formularioProduto' className="text-decorator-none">
            <Box mx={1} className="cursor ">
              <Typography variant="h6" color="inherit">
                Cadastrar Produto
              </Typography>
            </Box>
          </Link>

          <Box mx={1} className="cursor" onClick={goLogout}>
            <Typography variant="h6" color="inherit">
              Logout
            </Typography>
          </Box>


        </Box>

      </Toolbar>
    </AppBar>
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
