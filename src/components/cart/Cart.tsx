import { Box, Button, Card, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Produto from "../../models/Produto";
import { buscaId } from "../../services/Service";
import { TokenState } from "../../store/tokens/tokensReducer";
import './Cart.css';

function Cart() {

    let history = useNavigate();

    const { id } = useParams<{ id: string }>()

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
        foto1: "https://s2.glbimg.com/osevdX4hgAbhp630e5ajLpuAkSA=/620x455/e.glbimg.com/og/ed/f/original/2018/09/20/luxo_organico_01.jpg",
        foto2: "",
        peso: 0.5,
        perecivel: true,
        ativo: true,
        dataFabricacao: "25-06-2022",
        dataValidade: "28-08-2022"
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado!")
            history("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

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
        alert("Compra confirmada! Verifique seu email!")
        history("/produtos")
    }

    return (
        <>
            <Box m={2} display='flex' justifyContent="center">
                <Card variant="outlined" className="card-container">
                    <div className='card-product'>
                        <img src={produto.foto1} alt="imagem_organicos" />

                        <div className="card-product-info">
                            <Typography color="textSecondary" gutterBottom>
                                Produtos
                            </Typography>

                            <Typography variant="h5" component="h2">
                                {produto.nome}
                            </Typography>

                            <Typography variant="body2" component="p">
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


                            <Typography variant="body2" component="p">
                                Total: R$ {valorTotal()}
                            </Typography>

                        </div>
                    </div>
                </Card>
                <Box display="flex" flexDirection="column" justifyContent="center" mb={1.5}>

                    <Box className="card-product-button">
                        <Box mx={1}>
                            <Button onClick={confirmSales} variant="contained" size="small" color="primary">
                                Confirmar Compra
                            </Button>
                        </Box>
                    </Box>

                    <Link to="/produtos" className="card-product-button">
                        <Box mx={1}>
                            <Button variant="contained" size="small" color="secondary">
                                Cancelar
                            </Button>
                        </Box>
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default Cart;