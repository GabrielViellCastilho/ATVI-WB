import Cliente from "../model/Cliente";
import Produto from "../model/Produto";
import Listagem from "./Listagem";

export default  class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    private clientes: Array<Cliente>

    constructor(produtos: Array<Produto>, clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.produtos = produtos
    }


    public listar(): void {
        console.clear()
        console.log("--- Listando Produtos ---")
        this.produtos.forEach(produto => {
            console.log(`Nome: ${produto.nome}`)
            console.log(`Preço: ${produto.preco}`)
            console.log(`----------------------------`)
        })
    }

    public listarProdutosMaisVendidos(): void {
        console.clear();
    
        let ListaDeProdutosComQuantidade: Array<QuantidadeProduto> = [];
    
        this.produtos.forEach((produto: Produto) => {
            ListaDeProdutosComQuantidade.push(new QuantidadeProduto(produto));
        });
    
        this.clientes.forEach((cliente: Cliente) => {
            const produtosConsumidos = cliente.getProdutosConsumidos;
    
            produtosConsumidos.forEach((produtoConsumido: Produto) => {
                const item = ListaDeProdutosComQuantidade.find(qp =>
                    qp.getProduto === produtoConsumido
                );
                if (item) {
                    item.quantidadeVendida++;
                }
            });
        });
    

        ListaDeProdutosComQuantidade.sort((a, b) => b.quantidadeVendida - a.quantidadeVendida);
    

        console.log("Produtos mais vendidos:");
        ListaDeProdutosComQuantidade.forEach((qp, index) => {
            console.log(`${index + 1}. ${qp.getProduto.nome} - Quantidade Vendida: ${qp.quantidadeVendida}`);
        });
    }

    public listarProdutosMaisVendidosPorGenero(genero: string): void {
        console.clear();
    
        let ListaDeProdutosComQuantidade: Array<QuantidadeProduto> = [];
    
        this.produtos.forEach((produto: Produto) => {
            ListaDeProdutosComQuantidade.push(new QuantidadeProduto(produto));
        });
    

        this.clientes.forEach((cliente: Cliente) => {
            if (cliente.genero === genero) {
                const produtosConsumidos = cliente.getProdutosConsumidos;
    
                produtosConsumidos.forEach((produtoConsumido: Produto) => {
                    const item = ListaDeProdutosComQuantidade.find(qp =>
                        qp.getProduto === produtoConsumido
                    );
                    if (item) {
                        item.quantidadeVendida++;
                    }
                });
            }
        });
    
        ListaDeProdutosComQuantidade.sort((a, b) => b.quantidadeVendida - a.quantidadeVendida);
    
        console.log(`Produtos mais vendidos para o gênero "${genero}":`);
        ListaDeProdutosComQuantidade.forEach((qp, index) => {
            console.log(`${index + 1}. ${qp.getProduto.nome} - Quantidade Vendida: ${qp.quantidadeVendida}`);
        });
    }
    
    
}

class QuantidadeProduto{
    public quantidadeVendida: number
    private produto: Produto

    constructor(produto: Produto){
        this.quantidadeVendida = 0
        this.produto = produto
    }

    public get getProduto(){
        return this.produto
    }

}