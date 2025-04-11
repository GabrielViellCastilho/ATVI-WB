import Servico from "../model/Servico";
import Cliente from "../model/Cliente";
import Listagem from "./Listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    private clientes: Array<Cliente>

    constructor(servicos: Array<Servico>, clientes: Array<Cliente>) {
        super()
        this.servicos = servicos
        this.clientes = clientes
    }

    public listar(): void {
        console.clear()
        console.log("--- Listando Serviços ---")
        this.servicos.forEach(servico => {
            console.log(`Nome: ${servico.nome}`)
            console.log(`Preço: ${servico.preco}`)
            console.log(`----------------------------`)
        })
    }

    public listarServicosMaisConsumidos(): void {
        console.clear();
    
        let ListaDeServicosComQuantidade: Array<QuantidadeServico> = [];
    
        this.servicos.forEach((servico: Servico) => {
            ListaDeServicosComQuantidade.push(new QuantidadeServico(servico));
        });
    
        this.clientes.forEach((cliente: Cliente) => {
            const servicosConsumidos = cliente.getServicosConsumidos;
    
            servicosConsumidos.forEach((servicoConsumido: Servico) => {
                const item = ListaDeServicosComQuantidade.find(qs =>
                    qs.getServico === servicoConsumido
                );
                if (item) {
                    item.quantidadeConsumida++;
                }
            });
        });
    
        ListaDeServicosComQuantidade.sort((a, b) => b.quantidadeConsumida - a.quantidadeConsumida);
    
        console.log("Serviços mais consumidos:");
        ListaDeServicosComQuantidade.forEach((qs, index) => {
            console.log(`${index + 1}. ${qs.getServico.nome} - Quantidade Consumida: ${qs.quantidadeConsumida}`);
        });
    }

    public listarServicosMaisConsumidosPorGenero(genero: string): void {
        console.clear();
    
        let ListaDeServicosComQuantidade: Array<QuantidadeServico> = [];
    
        this.servicos.forEach((servico: Servico) => {
            ListaDeServicosComQuantidade.push(new QuantidadeServico(servico));
        });
    
        this.clientes.forEach((cliente: Cliente) => {
            if (cliente.genero === genero) {
                const servicosConsumidos = cliente.getServicosConsumidos;
    
                servicosConsumidos.forEach((servicoConsumido: Servico) => {
                    const item = ListaDeServicosComQuantidade.find(qs =>
                        qs.getServico === servicoConsumido
                    );
                    if (item) {
                        item.quantidadeConsumida++;
                    }
                });
            }
        });
    
        ListaDeServicosComQuantidade.sort((a, b) => b.quantidadeConsumida - a.quantidadeConsumida);
    
        console.log(`Serviços mais consumidos para o gênero "${genero}":`);
        ListaDeServicosComQuantidade.forEach((qs, index) => {
            console.log(`${index + 1}. ${qs.getServico.nome} - Quantidade Consumida: ${qs.quantidadeConsumida}`);
        });
    }
}

class QuantidadeServico {
    public quantidadeConsumida: number
    private servico: Servico

    constructor(servico: Servico) {
        this.quantidadeConsumida = 0
        this.servico = servico
    }

    public get getServico() {
        return this.servico
    }
}