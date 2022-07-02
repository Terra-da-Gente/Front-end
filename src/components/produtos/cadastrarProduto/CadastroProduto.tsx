import { ChangeEvent, useEffect, useState } from 'react'
import { Button, Container, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@material-ui/core";
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import './CadastroProduto.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TokenState } from "../../../store/tokens/tokensReducer";
import { Box } from '@mui/material';



function CadastroProduto() {

    const [value, setValue] = useState('Não');
    let history = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [categorias, setCategorias] = useState<Categoria[]>([])


    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        ativo: true,
        foto1: ''
    })

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        quantidade: 0,
        descricao: '',
        foto1: '',
        foto2: '',
        peso: 0,
        preco: 0,
        perecivel: true || false,
        ativo: true,
        dataFabricacao: '',
        dataValidade: '',
        categoria: null
    })

    // useEffect(() => {
    //     if (token === "") {
    //         toast.error('Você precisa estar logado!', {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: false,
    //             draggable: false,
    //             theme: "colored",
    //             progress: undefined,
    //         });
    //         history("/login")
    //     }
    // }, [token])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categoria", setCategorias, {
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

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await put(`/produto`, produto, setProduto, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('🌱 Produto atualizado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });

            } catch (error) {
                console.log(`Error: ${error}`)

                toast.error('Erro, por favor verifique a quantidade minima de caracteres!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }

        } else {
            try {
                await post(`/produto`, produto, setProduto, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('🌱 Produto cadastrado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });

            } catch (error) {
                console.log(`Error: ${error}`)

                toast.error('Erro, por favor verifique a quantidade minima de caracteres!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
        back()
    }

    function back() {
        history('/produtos')
    }



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };



    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro produto</Typography>
                
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth required />
               
                <TextField value={produto.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="quantidade" label="quantidade" variant="outlined" name="quantidade" margin="normal" fullWidth required />
                
                {/* <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth /> */}
                
                <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="preco" variant="outlined" name="preco" margin="normal" fullWidth required />
                
                <TextField value={produto.foto1} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto1" label="foto1" variant="outlined" name="foto1" margin="normal" fullWidth />
               
                <TextField value={produto.foto2} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto2" label="foto2" variant="outlined" name="foto2" margin="normal" fullWidth />
               
                <TextField value={produto.peso} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="peso" label="peso(kg) / volume(l)" variant="outlined" name="peso" margin="normal" fullWidth required />
               
                {/* <TextField value={produto.ativo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="ativo" label="ativo" variant="outlined" name="ativo" margin="normal" fullWidth required /> */}
                
                <FormControl  id="ativo" component="fieldset" fullWidth required >
                    <FormLabel  component="legend">Produto Ativo:</FormLabel>
                    <RadioGroup row  aria-label="gender" name="ativo" value={produto.ativo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} >
                        <FormControlLabel  value="true" control={<Radio />} label="Sim" />
                        <FormControlLabel  value="false" control={<Radio />} label="Não" />
                    </RadioGroup>
                </FormControl>
               
                <FormControl id="perecivel" component="fieldset" fullWidth required >
                    <FormLabel component="legend">Perecivel:</FormLabel>
                    <RadioGroup row aria-label="gender" name="perecivel" value={produto.perecivel} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} >
                        <FormControlLabel value="true" control={<Radio />} label="Sim" />
                        <FormControlLabel value="false" control={<Radio />} label="Não" />
                    </RadioGroup>
                </FormControl>
                {/* <TextField value={produto.dataFabricacao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="dataFabricacao" label="dataFabricacao" variant="outlined" name="dataFabricacao" margin="normal" fullWidth />
                <TextField value={produto.dataValidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="dataValidade" label="dataValidade" variant="outlined" name="dataValidade" margin="normal" fullWidth /> */}
              
                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper" onChange={(e) => buscaId(`/categoria/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.nome}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma Categoria para o produto</FormHelperText>
                    <Box marginTop={2} marginBottom={2} textAlign="center">
                        <Button type="submit" variant="contained" color="primary" className='button-finalizar'>
                            Finalizar
                        </Button>
                        <Link to="/produtos">
                            <Button type="submit" variant="contained" color="secondary" className='button-cancelar'>
                                Cancelar
                            </Button>
                        </Link>
                    </Box>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroProduto;
