import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <AppBar position="static" className="back" >
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

          <Box mx={1} className="cursor">
            <Typography variant="h6" color="inherit">
              Produtos
            </Typography>
          </Box>

          <Link to='/sobre' className="text-decorator-none">
          <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Sobre Nós
              </Typography>
          </Box>
          </Link>
          
          <Link to='/login' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
            </Box>
          </Link>

        </Box>

      </Toolbar>
    </AppBar>
    </>
  );
}

export default Navbar;
