import React from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";

import "./Sobrenos.css";

function Sobrenos() {
    return (
        <>
            <Grid container direction='row'>
                <Grid xs={6}>
                    <Box paddingX={5}>
                        <form>
                            <Typography variant='h3'>Contato</Typography>
                            <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                            <TextField id='telefone' label='telefone' variant='outlined' name='telefone' margin='normal' fullWidth />
                            <TextField id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth />
                        </form>
                    </Box>

                </Grid>
                <Grid xs={6}>
                </Grid>
                <Grid xs={12}>
                    <Box paddingX={5}>
                        <Typography variant="h3">Sobre nós</Typography>
                        <Typography variant="h6"> O projeto Terra da Gente visa melhorar a qualidade de vida e fornecer meios de subsistência para as familias em situação de assentamento envolvidas, bem como incentivar o consumo de produtos e serviços dos  pequenos empreendedores, agricultores rurais e urbanos em situação de vulnerabilidade.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Sobrenos;