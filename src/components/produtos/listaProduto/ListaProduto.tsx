import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaProduto.css';
import { buscasemtoken } from '../../../services/Service';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Box } from '@mui/material';

function ListaProduto() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    // let navigate = useNavigate();

    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        width: "300px",
        height: "520px",
        marginTop: "25px"
    };

    async function getProduto() {
        await buscasemtoken("/produto", setProdutos)
    }

    useEffect(() => {

        getProduto()

    }, [produtos.length])

    var produtosComponent;

    if (token === "") {
        {
            produtosComponent = produtos.map(produtos => (
                <Box display="flex" flexWrap="wrap" justifyContent="center" m={3}>
                    <Card className='cardStyle'>
                        <CardContent>
                            {/* <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography> */}
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <img src={produtos.foto1} className="imagemok" alt='produto' />
                            </Box>

                            <Typography style={{marginTop: 10}} variant="h5" component="h2">
                                {produtos.nome}
                            </Typography>

                            {/* <Typography variant="h6" component="p">
                                {produtos.categoria?.nome}
                            </Typography> */}

                            <Typography variant="body2" component="p">
                                {produtos.descricao}
                            </Typography>

                            <Typography variant="h6" component="p">
                                R$ {produtos.preco}
                            </Typography>

                            <Typography variant="subtitle1" component="p">
                                {produtos.peso} kg / l
                            </Typography>

                            {/* <Typography variant="body2" component="p">
                                    Perecível: {produtos.perecivel ? 'Sim' : 'Não'}
                                </Typography> */}
                        </CardContent>
                        <CardActions>

                            <Box display="flex" justifyContent="center" mb={1.5}>
                                {/* <Link to={`/formularioProduto/${produtos.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft button-atualizar" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${produtos.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary" className='button-deletar'>
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link> */}
                                <Link to={`/carrinho/${produtos.id}`} className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant='contained' size='small' color="secondary" className='button-comprar'>
                                            Comprar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box >
            ))
        }
    } else {
        {
            produtosComponent = produtos.map(produtos => (
                <Box m={2} >
                    <Card className='cardStyle'>
                        <CardContent>
                            {/* <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography> */}
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <img src={produtos.foto1} className="imagemok" />
                            </Box>

                            <Typography style={{marginTop: 10}} variant="h5" component="h2">
                                {produtos.nome}
                            </Typography>

                            <Typography variant="h6" component="p">
                                {produtos.categoria?.nome}
                            </Typography>

                            <Typography variant="body2" component="p">
                                {produtos.descricao}
                            </Typography>

                            <Typography variant="h6" component="p">
                                R$ {produtos.preco}
                            </Typography>

                            <Typography variant="subtitle1" component="p">
                                {produtos.peso} kg/l
                            </Typography>

                            {/* <Typography variant="body2" component="p">
                                Perecível: {produtos.perecivel ? 'Sim' : 'Não'}
                            </Typography> */}

                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>
                                <Box>
                                    <Link to={`/formularioProduto/${produtos.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft button-atualizar" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/carrinho/${produtos.id}`} className="text-decorator-none" >
                                        <Box mx={1} display="flex" justifyContent="flex-start">
                                            <Button variant='contained' size='small' color="secondary" className='button-comprar'>
                                                Comprar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>

                                <Box>
                                    <Link to={`/deletarProduto/${produtos.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="outlined" size='small' color="secondary" className='button-deletar'>
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </Box>

                        </CardActions>
                    </Card>
                </Box>
            ))
        }
    }
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {produtosComponent}
            </Grid>
        </>
    )
}

export default ListaProduto;
