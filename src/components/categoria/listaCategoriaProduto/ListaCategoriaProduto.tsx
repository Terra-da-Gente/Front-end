import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaCategoriaProduto.css';
import { buscaId, buscasemtoken } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Categoria from '../../../models/Categoria';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Produto from '../../../models/Produto';
import { Box } from '@mui/material';

function ListaCategoriaProduto() {

    const [categorias, setCategorias] = useState<Categoria>({
        nome: "",
        ativo: false,
        foto1: "",
        id: 0
    })

    const [produtos, setProdutos] = useState<Produto[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    // let navigate = useNavigate();

    const { id } = useParams<{ id: string }>()

    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        width: "300px",
        height: "520px",
        marginTop: "25px"
    };

    async function getCategoria() {
        await buscaId(`categoria/${id}`, setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function getProduto() {
        await buscasemtoken("/produto", setProdutos)
    }

    useEffect(() => {
        getCategoria()
    }, [id])

    useEffect(() => {
        getProduto()
    }, [produtos.length])
    

    // console.log(categorias)

    const cardStyle2 = {
        display: "block",
        transitionDuration: "0.3s",
        width: "300px",
        height: "420px"
    };

    var produtosComponent;

    if (token === "") {
        {
            produtosComponent =
                categorias.produto?.map(prod => (
                    <>
                        <Box>
                            <Typography variant='h2'>
                                {prod.categoria?.nome}
                            </Typography>
                        </Box>

                        <Box display="flex" flexWrap="wrap" justifyContent="center" m={3}>
                            <Card className='cardStyle'>
                                <CardContent>
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <img src={prod.foto1} className="imagemok" alt='produto' />
                                    </Box>

                                    <Typography style={{ marginTop: 10 }} variant="h5" component="h2">
                                        {prod.nome}
                                    </Typography>

                                    <Typography variant="body2" component="p">
                                        {/* {produtos.descricao} */}
                                    </Typography>

                                    <Typography variant="h6" component="p">
                                        R$ {prod.preco}
                                    </Typography>

                                    <Typography variant="subtitle1" component="p">
                                        {prod.peso} kg / l
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                    <Box display="flex" justifyContent="center" mb={1.5}>

                                        <Link to={`/carrinho/${prod.id}`} className="text-decorator-none">
                                            <Box mx={1}>
                                                <Button variant='contained' size='small' color="secondary" className='button-comprar'>
                                                    Comprar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Box></>
                ))
        }

    } else {
        produtosComponent =
            categorias.produto?.map(prod => (
                <>
                    <Box display="flex" flexWrap="wrap" justifyContent="center" m={3}>
                        <Card className='cardStyle'>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="center">
                                    <img src={prod.foto1} className="imagemok" alt='produto' />
                                </Box>

                                <Typography style={{ marginTop: 10 }} variant="h5" component="h2">
                                    {prod.nome}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    {/* {produtos.descricao} */}
                                </Typography>

                                <Typography variant="h6" component="p">
                                    R$ {prod.preco}
                                </Typography>

                                <Typography variant="subtitle1" component="p">
                                    {prod.peso} kg / l
                                </Typography>
                            </CardContent>
                            <CardActions>

                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/carrinho/${prod.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant='contained' size='small' color="secondary" className='button-comprar'>
                                                Comprar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box></>
            ))
    }

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Typography variant='h5' align='center' style={{ color: 'black', marginTop: 50, marginBottom: 20, letterSpacing: 6, textTransform: 'uppercase' }}>
                        {categorias.nome}
                    </Typography>
                </Grid>

                {produtosComponent}

                <Grid item xs={12} style={{ height: '60vh', marginBottom: 80, marginTop: 100 }} alignItems="center">
                    <Typography style={{ letterSpacing: 6 }} variant='h6' align="center">OFERTAS PRA COMPRAR AGORA</Typography>
                    <Swiper className=" " slidesPerView={6} speed={800} slidesPerGroup={6} loop={true} spaceBetween={10} modules={[Navigation]} navigation={true}>
                        {
                            produtos.map(produtos => (
                                <SwiperSlide>
                                    <Card style={cardStyle2}>
                                        <CardContent>
                                            <Box display="flex" alignItems="center" justifyContent="center">
                                                < img src={produtos.foto1} className="imagemok" />
                                            </Box>
                                            <CardContent>
                                                <Typography variant='h5' className='produto-text'>{produtos.nome}</Typography>
                                            </CardContent>
                                            <CardContent>
                                                <Typography variant='h6' className='preco'>R${produtos.preco}</Typography>
                                            </CardContent>
                                            <CardContent>
                                                <Link to={`/carrinho/${produtos.id}`} >
                                                    <Button className="button-comprar-home">
                                                        Comprar
                                                    </Button>
                                                </Link>
                                            </CardContent>
                                        </CardContent>
                                    </Card>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Grid>
            </Grid>
        </>
    )
}

export default ListaCategoriaProduto;
