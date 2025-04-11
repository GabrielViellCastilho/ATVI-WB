import Servico from "../model/Servico"
import Cadastro from "./Cadastro"
import Entrada from "./Entrada"

export default class CadastroServico extends Cadastro{
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.clear()
        console.log(`---- Início do cadastro do serviço ----`);
        let nome = this.entrada.receberTexto(`Insira o nome do serviço: `)
        let preco = this.entrada.receberNumero(`Insira o preço do serviço: `)
        let servico = new Servico(nome,preco)
        this.servicos.push(servico)
        console.log(`\n---- Cadastrado com sucesso ----\n`);
    }

    public remover(): void {
        console.clear();
        console.log(`---- Início da remoção do serviço ----`);
        const nome = this.entrada.receberTexto(`Insira o nome do serviço: `);
    
        const index = this.servicos.findIndex(servico => servico.nome === nome);
    
        if (index === -1) {
            console.log(`\nServiço "${nome}" não encontrado!`);
            return;
        }
    
        this.servicos.splice(index, 1);
        console.log(`\nServiço "${nome}" removido com sucesso!`);
    }

    public atualizar(opcao: number): void {
        console.clear();
    
        const nome = this.entrada.receberTexto(`Insira o nome do serviço que você deseja alterar: `);
    
        if (!this.vericarSeServicoExiste(nome)) {
            console.log(`Não existe um serviço com esse nome!`);
            return;
        }
    
        const servico = this.obterServicoPeloNome(nome);
    
        if (!servico) {
            console.error(`Erro ao obter o serviço!`);
            return;
        }
    
        switch (opcao) {
            case 1:
                const novoNome = this.entrada.receberTexto(`Insira o novo nome: `);
                servico.nome = novoNome;
                break;
    
            case 2:
                const novoPreco = this.entrada.receberNumero(`Insira o novo preço: `);
                servico.preco = novoPreco;
                break;
        }
    
        console.log(`--- Atualizado com sucesso ---`);
    }
    
    private vericarSeServicoExiste(nome:string): boolean{
        this.servicos.forEach((servico: Servico) => {
            if (servico.nome === nome) return true 
        })
        return false
    }

    private obterServicoPeloNome(nome: string): Servico | null{
        this.servicos.forEach((servico: Servico) => {
            if(servico.nome === nome){
                return servico
            }
        })
        return null
    }
}