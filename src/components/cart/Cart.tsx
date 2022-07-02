import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { busca, buscasemtoken } from "../../services/Service";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Produto from "../../models/Produto";
import { buscaId } from "../../services/Service";
import { TokenState } from "../../store/tokens/tokensReducer";
import './Cart.css';
import { Box } from "@mui/material";

function Cart() {

    let history = useNavigate();

    const { id } = useParams<{ id: string }>()
    const [produtos, setProdutos] = useState<Produto[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    const [quantidadeFinal, setQuantidadeFinal] = useState(0)

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: "Orgânicos",
        quantidade: 6,
        descricao: '',
        preco: 8.50,
        foto1: "",
        foto2: "",
        peso: 0.5,
        perecivel: true,
        ativo: true,
        dataFabricacao: "25-06-2022",
        dataValidade: "28-08-2022"
    })

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            history("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getProduto() {
        await busca("/produto", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produto/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let valor = +e.target.value
        setQuantidadeFinal(valor);
    }

    function valorTotal() {
        return quantidadeFinal * produto.preco
    }

    function confirmSales() {
        toast.success('🛒 Compra confirmada! Verifique seu email!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
        history("/produtos")
    }

    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        width: "300px",
        height: "420px"
    };

    return (
        <>
            <Box m={2} display='flex' justifyContent="center">
                <Card variant="outlined" className="card-container">
                    <div className='card-product'>
                        <img src={produto.foto1} alt="imagem_organicos" className="card-product-image" />

                        <div className="card-product-info">
                            {/* <Typography color="textSecondary" gutterBottom>
                                Produtos
                            </Typography> */}

                            <Typography variant="h5" component="h2" style={{marginTop: 10}}>
                                {produto.nome} {produto.peso} kg / l
                            </Typography>

                            <Typography variant="subtitle1" component="p">
                                R${produto.preco}
                            </Typography>

                            <Typography variant="body2" component="p">
                                Quantidade Máx: {produto.quantidade}
                            </Typography>

                            <TextField
                                value={quantidadeFinal}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}

                                InputProps={{ inputProps: { min: 1, max: produto.quantidade } }}

                                id="quantidade" label="quantidade" type="number" variant="outlined"
                                name="quantidade" margin="normal" fullWidth
                            />

                            <Typography variant="body1" component="p">
                                Total: R$ {valorTotal().toFixed(2)}
                            </Typography>

                            {/* Descricao: {produto.descricao} */}

                        </div>
                    </div>
                </Card>
                <Box display="flex" flexDirection="column" justifyContent="center" mb={1.5}>

                    <Box className="card-product-button">
                        <Box mx={1}>
                            <Button onClick={confirmSales} variant="contained" size="small" className="button-comprar-home">
                                Confirmar Compra
                            </Button>
                        </Box>
                    </Box>

                    <Link to="/produtos" className="card-product-button">
                        <Box mx={1}>
                            <Button variant="contained" size="small" className="button-cancelar-compra">
                                Cancelar
                            </Button>
                        </Box>
                    </Link>
                </Box>
            </Box>

            {/* <Grid item xs={12} style={{ height: '60vh', marginBottom: 100 }} alignItems="center">
                <Typography style={{ letterSpacing: 6, marginBottom: 40 }} variant='h6' align="center">Pessoas que compraram {produto.nome} tambem compraram</Typography>
                <Swiper className=" " slidesPerView={4} speed={800} slidesPerGroup={4} loop={true} spaceBetween={10} modules={[Navigation]} navigation={true}>
                    {
                        produtos.map(produtos => (
                            <SwiperSlide>
                                <Card style={cardStyle}>
                                    <CardContent>
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            < img src={produtos.foto1} className="imagemok" />
                                        </Box>
                                        <CardContent>
                                            <Typography variant='h5' className='produto'>{produtos.nome}</Typography>
                                        </CardContent>
                                        <CardContent>
                                            <Typography variant='h6' className='preco'>R${produtos.preco}</Typography>
                                        </CardContent>
                                        <CardContent>
                                            <Link to={`/carrinho/${produtos.id}`} >
                                                <Button className="button-comprar-home">
                                                    Comprar
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Grid> */}

        </>
    )
}

export default Cart;