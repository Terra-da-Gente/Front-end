import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";

import "./Sobrenos.css";

function Sobrenos() {
    return (
        <>
            <section>
                <div className="primeiroconteudo">
                    <Typography className="titulosobrenos" variant="h3">Sobre</Typography>
                    <Typography className="titulonos" variant="h3">Nós</Typography>
                    <Typography className="textosobrenos" variant="h6"> O projeto Terra da Gente visa melhorar a qualidade de vida e fornecer meios de subsistência para as familias em situação de assentamento envolvidas, bem como incentivar o consumo de produtos e serviços dos  pequenos empreendedores, agricultores rurais e urbanos em situação de vulnerabilidade.</Typography>
                </div>
            </section>
            <section className="segundoconteudo">
                <div>
                <Typography className="textosobrenos" variant="h3" color="initial">Nosso Time: </Typography>
                </div>
            </section>
            <section className="terceiroconteudo">
                <div>
                    {/* onde vão ficar as fotos dos integrantes e o linkedin */}
                </div>
            </section>
            <section className="ultimoconteudo">
                <div>
                    <form>
                        <Typography className="textosobrenos" variant='h3'>Contato</Typography>
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='telefone' label='telefone' variant='outlined' name='telefone' margin='normal' fullWidth />
                        <TextField id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth />
                        <Button type='submit' variant="contained" color="secondary" className="btnCadastrar">
                            Enviar
                        </Button>
                    </form>
                </div>
                {/* adicionar tamanho e edições após adicionar a imagem original */}
                <img className="imgsobrenos" src="https://imgur.com/RPGb5d2.jpg"></img>
            </section>

        </>
    );
}

export default Sobrenos;