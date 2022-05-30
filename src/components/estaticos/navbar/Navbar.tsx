import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" className="back" >
    <Toolbar variant="dense" className="font">
      <Box className="cursor" >
        <Typography variant="h6" color="inherit" className="cursor" >
          Terra da Gente
        </Typography>
      </Box>

      <Box display="flex" justifyContent="start">
        <Box mx={1} className="cursor ">
          <Typography variant="h6" color="inherit">
            Home
          </Typography>
        </Box>
        <Box mx={1} className="cursor">
          <Typography variant="h6" color="inherit">
            Produtos
          </Typography>
        </Box>
        <Box mx={1} className="cursor">
          <Typography variant="h6" color="inherit">
            Sobre Nós
          </Typography>
        </Box>
        <Box mx={1} className="cursor">
          <Typography variant="h6" color="inherit">
            Contato
          </Typography>
        </Box>
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
  );
}

export default Navbar;
