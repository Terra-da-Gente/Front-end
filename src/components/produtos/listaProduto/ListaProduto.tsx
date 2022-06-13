import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProduto.css';


import { busca } from '../../../services/Service';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaProduto() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            navigate("/login")

        }
    }, [token])

    async function getProduto() {
        await busca("/produto", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getProduto()

    }, [produtos.length])


    return (
        <>
            {
                produtos.map(produtos => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                {/* <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography> */}
                                <Typography variant="h4" component="h2">
                                    {produtos.nome}
                                </Typography>
                                <Typography variant="h6" component="p">
                                    {produtos.categoria?.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    R$ {produtos.preco}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos.peso} kg
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos.perecivel.valueOf.toString}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioProduto/${produtos.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft button-atualizar" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${produtos.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary" className='button-deletar'>
                                                deletar
                                            </Button>                                       
                                        </Box>
                                    </Link>
                                    <Link to={`/carrinho/${produtos.id}`} className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant='contained' size='small' color="secondary" className='button-comprar'>
                                            Comprar
                                        </Button>
                                    </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>)
}

export default ListaProduto;
