import Produto from "./Produto"

interface Categoria {
    id: number;
    nome: string;
    ativo: boolean;
    foto1: string;
    produto?: Produto[] | null
}

export default Categoria;