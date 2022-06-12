import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "./Home.css";
import "swiper/css/navigation";
import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { busca, buscasemtoken } from "../../services/Service";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Categoria from "../../models/Categoria";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import Produto from "../../models/Produto";
import { ClassNames } from "@emotion/react";

function Home() {
    const [categoria, setCategoria] = useState<Categoria[]>([])
    const [produtos, setProdutos] = useState<Produto[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    let history = useNavigate();

    async function getCategoria() {
        await busca("/categoria", setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function getProduto() {
        await busca("/produto", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getCategoria()
    }, [categoria.length])

    useEffect(() => {
        getProduto()
    }, [produtos.length])

    SwiperCore.use([Autoplay])
    return (
        <>
            {/* ----- ITEM 1 ----- */}
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} style={{ height: '60vh' }} alignItems="center">

                    < Swiper className="mySwiper"
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        speed={1400}
                        autoplay={{ delay: 4000 }}
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
                                <Box display='inline'><Typography variant="h4">Projeto voltado para pequenos produtores</Typography></Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide className="img3">
                            <Box display='inline' alignItems='center' justifyContent='center'>
                                <Typography variant="h2">Nosso Instagram</Typography>
                                <Box display='inline'><Typography variant="h4">Para saber nossas novidades</Typography></Box>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Grid>

                {/* ----- ITEM 2 ----- */}
                <Grid item xs={12} style={{ height: '30vh' }} alignItems="center"></Grid>

                {/* ----- ITEM 3 ----- */}



                <Grid item xs={12} style={{ height: '30vh', marginBottom: 200 }} alignItems="center">

                    <Typography style={{ letterSpacing: 6 }} variant='h6' align="center">ARRASTE PRO LADO E CONFIRA VÁRIAS OFERTAS</Typography>

                    <Swiper className="mySwiperCategoria" slidesPerView={6} spaceBetween={30} modules={[Navigation]} navigation={true}>
                        {
                            categoria.map(categoria => (
                                <SwiperSlide className="prod1">{categoria.nome}</SwiperSlide>
                            ))
                        }
                    </Swiper>

                </Grid>


                {/* ----- ITEM 4 ----- */}
                < Grid item xs={6} style={{ height: '40vh', marginBottom: 200 }} >
                    <Box marginLeft={20}>
                        <Typography align="left" variant='h5' style={{ fontWeight: 'bold', letterSpacing: 4, lineHeight: 2 }}> VIDEO</Typography>
                        <Typography align="left" variant='h6' style={{ marginTop: 15 }}>LOREM.</Typography>
                        <Typography align="left" variant='h6' style={{ marginTop: 15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    </Box>
                </Grid>

                <Grid item xs={6} >
                    <Box className="video" padding={10} style={{ height: '40vh', marginBottom: 200 }}>
                        <iframe src="https://player.vimeo.com/video/328192920?h=d475fff31e" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </Box>
                </Grid>

                {/* ----- ITEM 5 ----- */}
                <Grid item xs={12} style={{ height: '60vh', marginBottom: 200 }} alignItems="center">
                    <Typography style={{ letterSpacing: 6 }} variant='h6' align="center">OFERTAS PRA COMPRAR AGORA</Typography>
                    <Swiper className="mySwiperProduct" slidesPerView={5} spaceBetween={10} modules={[Navigation]} navigation={true}>
                        {
                            produtos.map(produtos => (

                                <SwiperSlide>
                                    <Card>
                                        <CardContent>
                                            <img src={produtos.foto1} />
                                            <CardContent>
                                            <Typography variant='h5' className='produto'>{produtos.nome}</Typography>
                                            </CardContent>
                                            <CardContent>
                                            <Typography variant='subtitle1' className='preco'>R${produtos.preco}</Typography>
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

export default Home;
