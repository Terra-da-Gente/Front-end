import { useEffect, useState } from "react";
import { busca, buscasemtoken } from "../../services/Service";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import "./Home.css";

import Produto from "../../models/Produto";
import Categoria from "../../models/Categoria";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { red } from "@material-ui/core/colors";
import { CategoryOutlined } from "@material-ui/icons";
import { Box } from "@mui/material";

function Home() {
    const [categoria, setCategoria] = useState<Categoria[]>([])
    const [produtos, setProdutos] = useState<Produto[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    // let history = useNavigate();

    async function getCategoria() {
        await buscasemtoken("/categoria", setCategoria)
    }

    async function getProduto() {
        await buscasemtoken("/produto", setProdutos)
    }

    useEffect(() => {
        getCategoria()
    }, [categoria.length])

    useEffect(() => {
        getProduto()
    }, [produtos.length])

    SwiperCore.use([Autoplay])

    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        width: "300px",
        height: "420px"
    };

    return (
        <>
            {/* ----- ITEM 1 ----- */}
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Grid item xs={12} style={{ height: '60vh' }} alignItems="center">

                    < Swiper
                        className="mySwiper"
                        pagination={{ clickable: true }}
                        navigation={true}
                        speed={1400}
                        autoplay={{ delay: 4000 }}
                        modules={[Pagination, Navigation]}
                        loop={true}
                    >
                        <SwiperSlide className="img1">
                            <Box display='inline' alignItems='center' justifyContent='center'>
                                <Typography variant="h2">Terra da Gente</Typography>
                                <Box display='inline'><Typography variant="h4">Projeto voltado para pequenos produtores</Typography></Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide className="img2">
                            <Box display='inline' alignItems='center' justifyContent='center'>
                                <Typography variant="h2">Produtos Selecionados</Typography>
                                <Box display='inline'><Typography variant="h4">Alimentos Naturais e Orgânicos</Typography></Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide className="img3">
                            <Box display='inline' alignItems='center' justifyContent='center'>
                                <Typography variant="h2">Venha conhecer nossa Horta</Typography>
                                <Box display='inline'><Typography variant="h4">Entre em contato e agende uma visita</Typography></Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide className="img4">
                            <Box display='inline' alignItems='center' justifyContent='center'>
                                <Typography variant="h2">Nosso Instagram</Typography>
                                <Box display='inline'><Typography variant="h4">Para saber nossas novidades</Typography></Box>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Grid>

                {/* ----- ITEM 2 ----- */}
                <Grid item xs={12} style={{ height: '7vh', backgroundColor: "black" }} alignItems="center">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={0}
                        speed={35000}
                        loop={true}
                        autoplay={{ delay: 1, disableOnInteraction: true }}
                        freeMode={true}
                    >

                        <SwiperSlide className="imagemswiper"></SwiperSlide>
                    </Swiper>
                </Grid>

                {/* ----- ITEM 3 ----- */}
                <Grid item xs={12} style={{ height: '30vh', marginBottom: 175, marginTop: 100 }} alignItems="center">
                    <Typography style={{ letterSpacing: 6, marginBottom: 40 }} variant='h6' align="center">ARRASTE PRO LADO E CONFIRA VÁRIAS OFERTAS</Typography>
                    <Swiper
                        className="mySwiperCategoria"
                        slidesPerView={6}
                        spaceBetween={30}
                        modules={[Navigation]}
                        navigation={true}
                    >
                        {
                            categoria.map(categoria => (
                                <SwiperSlide>
                                    <Typography variant='h5' className='categoria-text' style={{ color: "white", textShadow: "1px 1px 2px black" }}>{categoria.nome}</Typography>
                                    <Link to={`/categoria/${categoria.id}`} className="text-decorator-none" style={{ height: "250px", width: "250px" }}>
                                        <img src={categoria.foto1} className="categorias" />
                                    </Link>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Grid>

                {/* ----- ITEM 4 ----- */}
                <Grid item xs={12} style={{ height: '60vh', marginBottom: 80, marginTop: 20 }} alignItems="center">
                    <Typography style={{ letterSpacing: 6 }} variant='h6' align="center">OFERTAS PRA COMPRAR AGORA</Typography>
                    <Swiper className=" " slidesPerView={5} speed={800} slidesPerGroup={5} loop={true} spaceBetween={10} modules={[Navigation]} navigation={true}>
                        {
                            produtos.map(produtos => (
                                <SwiperSlide>
                                    <Card style={cardStyle}>
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

                {/* ----- ITEM 5 ----- */}
                < Grid item xs={6} style={{ height: '30vh', marginBottom: 250, marginTop: 100 }}>
                    <Box marginLeft={20} alignItems="center">
                        <Typography align="left" variant='h5' style={{ fontWeight: 'bold', letterSpacing: 4, lineHeight: 2 }}>Terra da Gente</Typography>
                        <Typography align="left" variant='h6' style={{ marginTop: 15 }}>O projeto Terra da Gente visa melhorar a qualidade de vida e fornecer meios de subsistência para as famílias em situação de assentamento envolvidas, bem como incentivar o consumo de produtos e serviços dos  pequenos empreendedores, agricultores rurais e urbanos em situação de vulnerabilidade.</Typography>
                    </Box>
                </Grid>

                <Grid item xs={6} >
                    <Box className="video" padding={10} style={{ height: '40vh', marginBottom: 250 }}>
                        <iframe src="https://www.youtube.com/embed/sOHIQ1aW6FA" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;
