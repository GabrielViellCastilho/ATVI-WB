import Cliente from "../model/Cliente";
import CPF from "../model/CPF";
import Cadastro from "./Cadastro";
import Entrada from "./Entrada";

export default class CadastroCliente extends Cadastro{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.clear()
        console.log(`---- Início do cadastro do cliente ----`);
        let nome = this.entrada.receberTexto(`Insira nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Insira o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Insira o genêro (M / F)`)
        let valor = this.entrada.receberTexto(`Insira o número do cpf: `);
        let data = this.entrada.receberTexto(`Insira a data de emissão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, genero, cpf);
        this.clientes.push(cliente)
        console.log(`\n---- Cadastrado com sucesso ----\n`);
    }

    public remover():void{
        console.clear()
        console.log(`---- Início remoção do cliente ----`);
        let cpf = this.entrada.receberTexto(`Insira o cpf do cliente`)
        this.clientes.filter((cliente: Cliente) => {
            return cliente.getCpf.getValor !== cpf
        })
        console.log(`\n---- Removido com sucesso ----\n`)
    }

    public atualizar(n: number, cpf: string):void{
        console.clear()

        let cliente = this.clientes.filter((cliente) =>{return cliente.getCpf.getValor === cpf})[0]

        if (cliente === undefined){
            console.log(`Cliente oom CPF = ${cpf} não encontrado`)
            return
        }

        switch(n){

            case 1:
                let nome =this.entrada.receberTexto(`Insira o nome: `)
                cliente.nome = nome

            case 2:
                let nomeSocial = this.entrada.receberTexto(`Insira o nome social: `)
                cliente.nomeSocial = nomeSocial

            case 3:
                let genero = this.entrada.receberTexto(`Insira o genêro (M / F): `)
                cliente.genero = genero

            case 4:
                let cpf = this.entrada.receberTexto(`Insira o valor do cpf: `)
                let data = this.entrada.receberTexto(`Insira a data de emissão dd/mm/yyyy: `);
                let partesData = data.split('/')
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                let dataEmissao = new Date(ano, mes, dia)
                cliente.setCpf = new CPF(cpf,dataEmissao)



        }
    }
}