import React from "react";
import { GitHub } from "@material-ui/icons";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Typography, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { Box } from "@mui/material";


function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token !== "" || token === ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className="bg">
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className="font1">Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    {/* <a href="https://www.facebook.com/generationbrasil" target="_blank">
                        <FacebookIcon className="redes" />
                    </a> */}
                    <a href="https://www.instagram.com/terradagen" target="_blank">
                        <InstagramIcon className="redes" />
                    </a>
                    <a href="https://github.com/Terra-da-Gente" target="_blank">
                        <GitHub className="git" />
                    </a>
                </Box>
            </Box>
            <Box className="pos-background">
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className="font1" >© 2022 Copyright:</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://terra-da-gente.netlify.app/">
                        <Typography variant="subtitle2" gutterBottom className="font1"align="center">terra-da-gente.netlify.app</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;

