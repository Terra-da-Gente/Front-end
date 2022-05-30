import React from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";

function Contato() {
    return (
        <>
            <Grid container>
                <Grid xs={6}>
                    <Box>
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
            </Grid>
        </>
    );
}

export default Contato;