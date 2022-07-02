import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaCategoria.css';
import { useNavigate } from 'react-router-dom';
import { buscasemtoken } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { Box } from '@mui/material';

function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([])

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  let history = useNavigate();

  // useEffect(() => {
  //   if (token == "") {
  //     toast.error('Você precisa estar logado!', {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark"
  //     });
  //     history("/login")

  //   }
  // }, [token])

  async function getCategoria() {
    await buscasemtoken("/categoria", setCategoria)
  }

  useEffect(() => {
    getCategoria()
  }, [categoria.length])

  var categoriasComponent;

  if (token === "") {
    {
      categoriasComponent =
        categoria.map(categoria => (
          <Box m={2} >
            <Card variant="outlined">
              <Link to={`/categoria/${categoria.id}`} className="text-decorator-none" >
                  <Typography color="textSecondary" style={{margin: 10}} >
                    Categoria
                  </Typography>
                <img src={categoria.foto1} className="categorias-img" style={{height: "80px", width: "80px", margin: 10}}/>
                <CardContent>
                  <Typography variant="h5">
                    {categoria.nome}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5} >

                    {/* <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="button-atualizar" size='small'  >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' className="button-deletar" >
                        deletar
                      </Button>
                    </Box>
                  </Link> */}

                  </Box>
                </CardActions>
              </Link>
            </Card>
          </Box>
        ))
    }
  } else {
    {
      categoriasComponent =
        categoria.map(categoria => (
          <Box m={2} >
            <Card variant="outlined">
              <Link to={`/categoria/${categoria.id}`} className="text-decorator-none" >
                <img src={categoria.foto1} className="categorias-img" style={{height: "80px", width: "80px", margin: 10}}/>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Categoria
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {categoria.nome}
                  </Typography>
                </CardContent>
              </Link>

              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="button-atualizar" size='small'  >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' className="button-deletar" >
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box >
        ))
    }

  }
  return (
    <>
      {categoriasComponent}
    </>
  );
}


export default ListaCategoria;