import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import "./Home.css";
import { Box, Typography } from "@material-ui/core";

function Home() {
    return (
        <>
            <Swiper className="mySwiper" style={{ height: '80vh' }}
                modules={[Pagination]}
                pagination={{ clickable: true }}
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
                        <Typography variant="h2">Produtos Selecionados</Typography>
                        <Box display='inline'><Typography variant="h4">Projeto voltado para pequenos produtores</Typography></Box>
                    </Box>
                </SwiperSlide>

            </Swiper>

        </>
    )
}

export default Home;
