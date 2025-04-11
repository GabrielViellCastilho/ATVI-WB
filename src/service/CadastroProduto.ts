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

    public remover(): void {
        console.clear();
        console.log(`---- Início da remoção do produto ----`);
        const nome = this.entrada.receberTexto(`Insira o nome do produto: `);
        
        const index = this.produtos.findIndex(produto => produto.nome === nome);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`\n---- Produto removido com sucesso ----\n`);
        } else {
            console.log(`\n---- Produto não encontrado ----\n`);
        }
    }

    public atualizar(opcao: number): void {
        console.clear();
    
        let nome = this.entrada.receberTexto(`Insira o nome do produto que você deseja alterar: `);
    
        if (!this.vericarSeProdutoExiste(nome)) {
            console.log(`Não existe um produto com esse nome!`);
            return;
        }
    
        const produto = this.obterProdutoPeloNome(nome);
    
        if (!produto) {
            console.error(`Erro ao obter o produto!`);
            return;
        }
    
        switch (opcao) {
            case 1:
                let novoNome = this.entrada.receberTexto(`Insira o novo nome: `);
                produto.nome = novoNome;
                break;
    
            case 2:
                let novoPreco = this.entrada.receberNumero(`Insira o novo preço: `);
                produto.preco = novoPreco;
                break;
        }
    
        console.log(`--- Atualizado com sucesso ---`);
    }
    

    private obterProdutoPeloNome(nome:string): Produto | null {
        this.produtos.forEach((produto: Produto) => {
            if (produto.nome === nome){
                return produto
            }
        })
        return null
    }

    private vericarSeProdutoExiste(nome:string): boolean{
        this.produtos.forEach((produto: Produto) => {
            if (produto.nome === nome) return true 
        })
        return false
    }
    
}