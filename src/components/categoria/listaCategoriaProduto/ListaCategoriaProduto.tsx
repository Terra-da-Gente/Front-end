import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaCategoriaProduto.css';
import { buscaId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Categoria from '../../../models/Categoria';

function ListaCategoriaProduto() {

    const [categorias, setCategorias] = useState<Categoria>({
        nome: "",
        ativo: false,
        foto1: "",
        id: 0
    })

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    // let navigate = useNavigate();

    const { id } = useParams<{ id: string }>()

    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        width: "300px",
        height: "520px",
        marginTop: "25px"
    };

    // async function getProduto() {
    //     await buscasemtoken("/produto", setProdutos)
    // }

    async function getCategoria() {
        await buscaId(`categoria/${id}`, setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    // useEffect(() => {
    //     getProduto()
    // }, [produtos.length])

    useEffect(() => {
        getCategoria()
    }, [id])

    // console.log(categorias)

    var produtosComponent;

    if (token === "") {
        {
            produtosComponent =
                categorias.produto?.map(prod => (
                    <>
                        <Box>
                            <Typography variant='h2'>
                                {prod.categoria?.nome}
                            </Typography>
                        </Box>

                        <Box display="flex" flexWrap="wrap" justifyContent="center" m={3}>
                            <Card className='cardStyle'>
                                <CardContent>
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <img src={prod.foto1} className="imagemok" alt='produto' />
                                    </Box>

                                    <Typography style={{ marginTop: 10 }} variant="h5" component="h2">
                                        {prod.nome}
                                    </Typography>

                                    <Typography variant="body2" component="p">
                                        {/* {produtos.descricao} */}
                                    </Typography>

                                    <Typography variant="h6" component="p">
                                        R$ {prod.preco}
                                    </Typography>

                                    <Typography variant="subtitle1" component="p">
                                        {prod.peso} kg / l
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                    <Box display="flex" justifyContent="center" mb={1.5}>

                                        <Link to={`/carrinho/${prod.id}`} className="text-decorator-none">
                                            <Box mx={1}>
                                                <Button variant='contained' size='small' color="secondary" className='button-comprar'>
                                                    Comprar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Box></>
                ))
        }

    } else {
        produtosComponent =
            categorias.produto?.map(prod => (
                <>
                    <Box display="flex" flexWrap="wrap" justifyContent="center" m={3}>
                        <Card className='cardStyle'>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="center">
                                    <img src={prod.foto1} className="imagemok" alt='produto' />
                                </Box>

                                <Typography style={{ marginTop: 10 }} variant="h5" component="h2">
                                    {prod.nome}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    {/* {produtos.descricao} */}
                                </Typography>

                                <Typography variant="h6" component="p">
                                    R$ {prod.preco}
                                </Typography>

                                <Typography variant="subtitle1" component="p">
                                    {prod.peso} kg / l
                                </Typography>
                            </CardContent>
                            <CardActions>

                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/carrinho/${prod.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant='contained' size='small' color="secondary" className='button-comprar'>
                                                Comprar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box></>
            ))
    }

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Typography variant='h5' align='center' style={{color: 'black', marginTop: 50, marginBottom:20, letterSpacing: 6, textTransform: 'uppercase' }}>
                        {categorias.nome}
                    </Typography>
                </Grid>


                {produtosComponent}

                {/* { categorias.produto?.map(prod => (
                <li>{ prod.nome }</li>
            )) } */}

            </Grid>
        </>
    )
}

export default ListaCategoriaProduto;
