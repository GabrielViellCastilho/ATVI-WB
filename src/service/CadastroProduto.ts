import Produto from "../model/Produto"
import Cadastro from "./Cadastro"
import Entrada from "./Entrada"

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.clear()
        console.log(`---- Início do cadastro do produto ----`);
        let nome = this.entrada.receberTexto(`Insira o nome do produto: `)
        let preco = this.entrada.receberNumero(`Insira o preço do produto: `)
        let produto = new Produto(nome,preco)
        this.produtos.push(produto)
        console.log(`\n---- Cadastrado com sucesso ----\n`);
    }

    public remover():void{
        console.clear()
        console.log(`---- Início remoção do produto ----`);
        let nome = this.entrada.receberTexto(`Insira o nome do produto`)
        this.produtos.filter((produto: Produto) => {
            return produto.nome !== nome
        })
        console.log(`\n---- Removido com sucesso ----\n`)
    }
}