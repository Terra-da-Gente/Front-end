import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import "./Home.css";
import { Typography } from "@material-ui/core";

function Home() {
    return (
        <>
            <Swiper className="mySwiper" style={{ height: '80vh' }}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >

                <SwiperSlide className="img1">
                    <Typography variant="h2">Terra da Gente</Typography>
                </SwiperSlide>
                <SwiperSlide className="img2">
                    <Typography variant="h2">Produtos selecionados</Typography>
                </SwiperSlide>
                <SwiperSlide className="img3">
                    <Typography variant="h2">Terra da Gente</Typography>
                </SwiperSlide>
            </Swiper>

        </>
    )
}

export default Home;
