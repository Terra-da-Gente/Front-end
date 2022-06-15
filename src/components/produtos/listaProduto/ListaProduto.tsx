import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaProduto.css';
import { busca, buscasemtoken } from '../../../services/Service';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { margin, padding } from '@mui/system';

function ListaProduto() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();

    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        width: "300px",
        height: "520px",
        marginTop: "25px"
    };

    // useEffect(() => {
    //     if (token == "") {
    //         toast.error('Você precisa estar logado!', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "dark"
    //         });
    //         navigate("/login")

    //     }
    // }, [token])

    async function getProduto() {
        await buscasemtoken("/produto", setProdutos)
    }

    useEffect(() => {

        getProduto()

    }, [produtos.length])

    var produtosComponent;

    if (token === "") {
        {
            produtosComponent =
                produtos.map(produtos => (

                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <Card style={cardStyle}>
                            <CardContent>
                                {/* <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography> */}
                                <Box display="flex" alignItems="center" justifyContent="center">
                                    <img src={produtos.foto1} className="imagemok" />
                                </Box>
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
                                    {produtos.peso} kg/l
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Perecível: {produtos.perecivel ? 'Sim' : 'Não'}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    {/* <Link to={`/formularioProduto/${produtos.id}`} className="text-decorator-none" >
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
                                    </Link> */}
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

                    </Box >
                ))
        }

    } else {
        {
            produtosComponent =

                produtos.map(produtos => (
                    <Box m={2} >
                        <Card style={cardStyle}>
                            <CardContent>
                                {/* <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography> */}
                                <Box display="flex" alignItems="center" justifyContent="center">
                                    <img src={produtos.foto1} className="imagemok" />
                                </Box>
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
                                    {produtos.peso} kg/l
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Perecível: {produtos.perecivel ? 'Sim' : 'Não'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" alignItems="center" mb={1.5}>

                                    <Link to={`/formularioProduto/${produtos.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft button-atualizar" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${produtos.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="outlined" size='small' color="secondary" className='button-deletar'>
                                                deletar
                                            </Button>
                                        </Box>
                                        <Link to={`/carrinho/${produtos.id}`} className="text-decorator-none" >
                                            <Box mx={1}>
                                                <Button variant='contained' size='small' color="secondary" className='button-comprar'>
                                                    Comprar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
        }
    }

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {produtosComponent}
            </Grid>
        </>
    )
}

export default ListaProduto;
