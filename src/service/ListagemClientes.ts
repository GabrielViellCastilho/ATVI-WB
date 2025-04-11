import Cliente from "../model/Cliente";
import Listagem from "./Listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    private formatarCliente(cliente: Cliente): string {
        return `
----------------------------
Nome: ${cliente.nome}
Nome Social: ${cliente.nomeSocial}
CPF: ${cliente.getCpf.getValor}
Gênero: ${cliente.genero}
----------------------------`;
    }

    private formatarClienteConsumo(cliente: Cliente): string {
        const totalItens = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
        return `
----------------------------
Nome: ${cliente.nome}
Nome Social: ${cliente.nomeSocial}
CPF: ${cliente.getCpf.getValor}
Produtos consumidos: ${cliente.getProdutosConsumidos.length}
Serviços consumidos: ${cliente.getServicosConsumidos.length}
Total itens: ${totalItens}
----------------------------`;
    }

    private formatarClienteValor(cliente: Cliente): string {
        const valorTotal = this.calcularValorConsumido(cliente);
        return `
----------------------------
Nome: ${cliente.nome}
Nome Social: ${cliente.nomeSocial}
CPF: ${cliente.getCpf.getValor}
Valor total consumido: R$ ${valorTotal.toFixed(2)}
----------------------------`;
    }

    public listar(): void {
        let output = "--- Listando Clientes ---\n";
        this.clientes.forEach(cliente => {
            output += this.formatarCliente(cliente);
        });
        console.log(output);
    }

    public listarTop10ClientesQueMaisConsumiramQuantidade(): void {
        let output = "--- Top 10 Clientes que mais consumiram em quantidade ---\n";
        
        const clientesOrdenados = [...this.clientes].sort((c1, c2) => {
            const consumo1 = c1.getProdutosConsumidos.length + c1.getServicosConsumidos.length;
            const consumo2 = c2.getProdutosConsumidos.length + c2.getServicosConsumidos.length;
            return consumo2 - consumo1;
        });
        
        clientesOrdenados.slice(0, 10).forEach(cliente => {
            output += this.formatarClienteConsumo(cliente);
        });
        
        console.log(output);
    }

    public listarTop10ClientesQueMenosConsumiramQuantidade(): void {
        let output = "--- Top 10 Clientes que menos consumiram em quantidade ---\n";
        
        const clientesOrdenados = [...this.clientes].sort((c1, c2) => {
            const consumo1 = c1.getProdutosConsumidos.length + c1.getServicosConsumidos.length;
            const consumo2 = c2.getProdutosConsumidos.length + c2.getServicosConsumidos.length;
            return consumo1 - consumo2;
        });
        
        clientesOrdenados.slice(0, 10).forEach(cliente => {
            output += this.formatarClienteConsumo(cliente);
        });
        
        console.log(output);
    }

    public listarTop5ClientesQueMaisConsumiramValor(): void {
        let output = "--- Top 5 Clientes que mais consumiram em valor ---\n";
        
        const clientesOrdenados = [...this.clientes].sort((c1, c2) => {
            const total1 = this.calcularValorConsumido(c1);
            const total2 = this.calcularValorConsumido(c2);
            return total2 - total1;
        });
        
        clientesOrdenados.slice(0, 5).forEach(cliente => {
            output += this.formatarClienteValor(cliente);
        });
        
        console.log(output);
    }

    public listarPorGenero(genero: string): void {
        let output = `--- Listando pessoas do gênero ${genero} ---\n`;
        
        this.clientes
            .filter(cliente => cliente.genero === genero)
            .forEach(cliente => {
                output += this.formatarCliente(cliente);
            });
        
        console.log(output);
    }

    private calcularValorConsumido(cliente: Cliente): number {
        const valorProdutos = cliente.getProdutosConsumidos.reduce((total, produto) => total + produto.preco, 0);
        const valorServicos = cliente.getServicosConsumidos.reduce((total, servico) => total + servico.preco, 0);
        return valorProdutos + valorServicos;
    }
}