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

    public remover():void{
        console.clear()
        console.log(`---- Início remoção do serviço ----`);
        let nome = this.entrada.receberTexto(`Insira o nome do serviço`)
        this.servicos.filter((servico: Servico) => {
            return servico.nome !== nome
        })
        console.log(`\n---- Removido com sucesso ----\n`)
    }
}