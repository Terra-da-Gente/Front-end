import Categoria from "./Categoria"
// import User from "./User"

interface Produto {
    id: number
    nome: string
    quantidade: number
    descricao: string
    preco: number
    foto1: string
    foto2: string
    peso: number
    perecivel: boolean
    ativo: boolean
    dataFabricacao: string
    dataValidade: string
    categoria?: Categoria | null
    // usuario?: User | null
}

export default Produto;