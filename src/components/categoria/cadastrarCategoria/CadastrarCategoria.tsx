import React, { useState, useEffect, ChangeEvent } from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from 'react-router-dom';
import './CadastrarCategoria.css';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, post, put } from '../../../services/Service';
import Categoria from '../../../models/Categoria';


function CadastrarCategoria() {
    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        ativo: true
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categoria/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria " + JSON.stringify(categoria))

        if (id !== undefined) {

            try {
                await put(`/categoria`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Categoria atualizado com sucesso');

            } catch (error) {
                console.log(`Error: ${error}`)
                alert("Erro, por favor verifique a quantidade minima de caracteres")
            };

        } else {
            try {
                await post(`/categoria`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Categoria cadastrado com sucesso');

            } catch (error) {
                console.log(`Error: ${error}`)
                alert("Erro, a quantidade minima são 5 caracteres. Por favor verifique.");
            }
        }
        back()
    }

    function back() {
        history('/categoria')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro categoria</Typography>
                <TextField value={categoria.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth required />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastrarCategoria;