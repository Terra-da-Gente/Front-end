import { Grid, TextField, Typography } from "@material-ui/core";
import React from "react";

function Contato() {
    return (
        <>
        <Grid container>
        <Grid xs={12}>
        <Typography variant='h3'>Contato</Typography>
            <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' />
            <TextField id='telefone' label='telefone' variant='outlined' name='telefone' margin='normal' />
            <TextField id='email' label='email' variant='outlined' name='email' margin='normal' />
        </Grid>
        </Grid>
        </>
    )
}

export default Contato;