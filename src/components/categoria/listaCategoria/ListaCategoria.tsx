import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaCategoria.css';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([])
  
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  let history = useNavigate();

  // useEffect(()=>{
  //   if(token == ''){
  //     alert("Você precisa estar logado")
  //     history("/login")
  //   }
  // }, [token])

  async function getCategoria(){
    await busca("/categoria", setCategoria, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getCategoria()
  }, [categoria.length])

  return (
    <>
    {
      categoria.map(categoria =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Categoria
            </Typography>
            <Typography variant="h5" component="h2">
             {categoria.nome}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaCategoria;