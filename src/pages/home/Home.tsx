import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "./Home.css";
import "swiper/css/navigation";
import { Box, Grid, Typography } from "@material-ui/core";

function Home() {
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
                <Grid item xs={12} style={{ height: '30vh' }} alignItems="center">
                    <Typography style={{ letterSpacing: 6 }} variant='h6' align="center">ARRASTE PRO LADO E CONFIRA VÁRIAS OFERTAS</Typography>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        modules={[Navigation]}
                        navigation={true}
                        className="mySwiperProduct"
                    >
                        <SwiperSlide className="prod1">Slide 1</SwiperSlide>
                        <SwiperSlide className="prod1">Slide 2</SwiperSlide>
                        <SwiperSlide className="prod1">Slide 3</SwiperSlide>
                        <SwiperSlide className="prod1">Slide 4</SwiperSlide>
                        <SwiperSlide className="prod1">Slide 5</SwiperSlide>
                        <SwiperSlide className="prod1">Slide 6</SwiperSlide>
                        <SwiperSlide className="prod1">Slide 7</SwiperSlide>
                        <SwiperSlide className="prod1">Slide 8</SwiperSlide>
                        <SwiperSlide className="prod1">Slide 9</SwiperSlide>
                    </Swiper>
                </Grid>


                {/* ----- ITEM 4 ----- */}
                <Grid item xs={12} style={{ height: '30vh' }} alignItems="center"></Grid>

            </Grid>
        </>
    )
}

export default Home;
