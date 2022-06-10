import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./Home.css";
import { Box, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    // useEffect(() => {
    //     if(token == ""){
    //     alert("Você precisa estar logado!")
    //     navigate("/login")
    //     }
    // }, [token])

    return (
        <>
            <Swiper className="mySwiper" style={{ height: '60vh' }}
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
                        <Typography variant="h2">Nosso Instagram</Typography>
                        <Box display='inline'><Typography variant="h4">Para saber nossas novidades</Typography></Box>
                    </Box>
                </SwiperSlide>

            </Swiper>

        </>
    )
}

export default Home;
