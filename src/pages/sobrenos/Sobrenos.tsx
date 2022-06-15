import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";

import "./Sobrenos.css";
import { CardTravelSharp } from "@material-ui/icons";
import Cards from "./cards/Cards";

function Sobrenos() {
    return (
        <>
            <section>
                <div className="primeiroconteudo">
                    <Typography className="titulo-sobre" variant="h3">Sobre Nós</Typography>

                    {/* <Typography className="titulo-nos" variant="h3">Nós</Typography> */}
                    <Typography className="texto-sobre" variant="h4"> O projeto Terra da Gente visa melhorar a qualidade de vida e fornecer meios de subsistência para as familias em situação de assentamento envolvidas, bem como incentivar o consumo de produtos e serviços dos  pequenos empreendedores, agricultores rurais e urbanos em situação de vulnerabilidade.</Typography>

                </div>
            </section>

            <section className="segundoconteudo">
                <div>
                    <Typography className="texto-nosso-time" variant="h3" color="initial">Nosso Time: </Typography>
                </div>
            </section>

            <section className="terceiroconteudo">
                <Cards/>
            </section>
            
            <section className="ultimoconteudo">
                <div>
                    <form>
                        <Typography className="texto-nosso-time" variant='h3'>Contato</Typography>
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='telefone' label='telefone' variant='outlined' name='telefone' margin='normal' fullWidth />
                        <TextField id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth />
                        <Button type='submit' variant="contained" color="secondary" className="btnCadastrar">
                            Enviar
                        </Button>
                    </form>
                </div>
                <img className="imgsobrenos" src="https://i.imgur.com/acMp0da.png"></img>
            </section>

        </>
    );
}

export default Sobrenos;