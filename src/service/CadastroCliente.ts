import Servico from "../model/Servico";
import Cliente from "../model/Cliente";
import CPF from "../model/CPF";
import Produto from "../model/Produto";
import Cadastro from "./Cadastro";
import Entrada from "./Entrada";

export default class CadastroCliente extends Cadastro{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servico: Array<Servico>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        this.produtos = produtos
        this.servicos = servico
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
                let nome =this.entrada.receberTexto(`Insira o novo nome: `)
                cliente.nome = nome
                break

            case 2:
                let nomeSocial = this.entrada.receberTexto(`Insira o novo nome social: `)
                cliente.nomeSocial = nomeSocial
                break

            case 3:
                let genero = this.entrada.receberTexto(`Insira o novo genêro (M / F): `)
                cliente.genero = genero
                break

            case 4:
                let cpf = this.entrada.receberTexto(`Insira o novo valor do cpf: `)
                let data = this.entrada.receberTexto(`Insira a nova data de emissão dd/mm/yyyy: `);
                let partesData = data.split('/')
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                let dataEmissao = new Date(ano, mes, dia)
                cliente.setCpf = new CPF(cpf,dataEmissao)
                break
            
            case 5:
                console.log(`O que deseja fazer?`)
                console.log(`1- Adicionar RG`)
                console.log(`2- Atualizar RG`)
                console.log(`3- Deletar RG`)
                let opcao = this.entrada.receberNumero(``)

                switch(opcao){

                    case 1:
                        let rg = this.entrada.receberTexto(`Insira o valor do RG: `)
                        let data = this.entrada.receberTexto(`Insira a data de emissão dd/mm/yyyy: `);
                        let partesData = data.split('/')
                        let ano = new Number(partesData[2].valueOf()).valueOf()
                        let mes = new Number(partesData[1].valueOf()).valueOf()
                        let dia = new Number(partesData[0].valueOf()).valueOf()
                        let dataEmissao = new Date(ano, mes, dia)
                        cliente.adicionarRG(rg,dataEmissao)
                        break
                    
                    case 2:
                        let rgAntigo = this.entrada.receberTexto(`Insira o valor do RG que deseja atualizar: `)
                        let rgNovo = this.entrada.receberTexto(`Insira o valor do RG novo`)
                        data = this.entrada.receberTexto(`Insira a data de emissão dd/mm/yyyy: `);
                        partesData = data.split('/')
                        ano = new Number(partesData[2].valueOf()).valueOf()
                        mes = new Number(partesData[1].valueOf()).valueOf()
                        dia = new Number(partesData[0].valueOf()).valueOf()
                        dataEmissao = new Date(ano, mes, dia)
                        cliente.atualizarRg(rgAntigo,rgNovo,dataEmissao)
                        break
                    case 3:
                        rg = this.entrada.receberTexto(`Insira o valor do RG que deseja remover: `)
                        cliente.deletarRg(rg)
                        break
                    }
            case 6:
                console.log(`O que deseja fazer?`)
                console.log(`1- Adicionar Telefone`)
                console.log(`2- Atualizar Telefone`)
                console.log(`3- Deletar Telefone`)
                opcao = this.entrada.receberNumero(``)

                switch(opcao){

                    case 1:
                        let ddd = this.entrada.receberTexto(`Insira o ddd: `)
                        let numero = this.entrada.receberTexto(`Insira o número: `)
                        cliente.adicionarTelefone(ddd, numero)
                        break
                    
                    case 2:
                        let numeroAntigo = this.entrada.receberTexto(`Insira o número antigo: `)
                        let dddNovo = this.entrada.receberTexto(`Insira o ddd novo: `)
                        let numeroNovo = this.entrada.receberTexto(`Insira o número novo: `)
                        cliente.atualizarTelefone(numeroAntigo,numeroNovo,dddNovo)
                        break
                    case 3:
                        numero = this.entrada.receberTexto(`Insira o número do telefone que deseja remover: `)
                        cliente.deletarTelefone(numero)
                        break
                    }
            case 7:
                console.log(`O que deseja fazer?`)
                console.log(`1- Adicionar Produto Consumido`)
                console.log(`2- Deletar Produto Consumido`)
                opcao = this.entrada.receberNumero(``)

                switch(opcao){

                    case 1:
                        let nome = this.entrada.receberTexto(`Insira o nome do produto: `)
                    
                        if (!this.vericarSeProdutoExiste(nome)) {
                            console.log(`Não existe um produto com esse nome!`)
                            break
                        }
                    
                        const produto = this.obterProdutoPeloNome(nome)
                    
                        if (produto) {
                            cliente.adicionarProdutoConsumido(produto)
                        } else {
                            console.log("Erro ao obter o produto. Tente novamente.")
                        }
                    
                        break
                    
                    
                    case 2:
                        nome = this.entrada.receberTexto(`Insira o nome do produto a ser removido: `)
                        cliente.deletarProdutoConsumido(nome)
                        break
                }
            case 7:
                console.log(`O que deseja fazer?`)
                console.log(`1- Adicionar Produto Consumido`)
                console.log(`2- Deletar Produto Consumido`)
                opcao = this.entrada.receberNumero(``)

                switch(opcao){

                    case 1:
                        let nome = this.entrada.receberTexto(`Insira o nome do produto: `)
                    
                        if (!this.vericarSeProdutoExiste(nome)) {
                            console.log(`Não existe um produto com esse nome!`)
                            break
                        }
                    
                        const produto = this.obterProdutoPeloNome(nome)
                    
                        if (produto) {
                            cliente.adicionarProdutoConsumido(produto)
                        } else {
                            console.log("Erro ao obter o produto. Tente novamente.")
                        }
                    
                        break
                    
                    
                    case 2:
                        nome = this.entrada.receberTexto(`Insira o nome do produto a ser removido: `)
                        cliente.deletarProdutoConsumido(nome)
                        break
                }
            case 8:
                console.log(`O que deseja fazer?`)
                console.log(`1- Adicionar Serviço Consumido`)
                console.log(`2- Deletar Serviço Consumido`)
                opcao = this.entrada.receberNumero(``)

                switch(opcao){

                    case 1:
                        let nome = this.entrada.receberTexto(`Insira o nome do servico: `)
                    
                        if (!this.vericarSeServicoExiste(nome)) {
                            console.log(`Não existe um serviço com esse nome!`)
                            break
                        }
                    
                        const servico = this.obterServicoPeloNome(nome)
                    
                        if (servico) {
                            cliente.adicionarServicoConsumido(servico)
                        } else {
                            console.log("Erro ao obter o serviço. Tente novamente.")
                        }
                    
                        break
                    
                    
                    case 2:
                        nome = this.entrada.receberTexto(`Insira o nome do servico a ser removido: `)
                        cliente.deletarServicoConsumido(nome)
                        break
                }


                

                

                
            
        }
    }

    private vericarSeProdutoExiste(nome:string): boolean{
        this.produtos.forEach((produto: Produto) => {
            if (produto.nome === nome) return true 
        })
        return false
    }

    private vericarSeServicoExiste(nome:string): boolean{
        this.servicos.forEach((servico: Servico) => {
            if (servico.nome === nome) return true 
        })
        return false
    }

    private obterProdutoPeloNome(nome:string): Produto | null {
        this.produtos.forEach((produto: Produto) => {
            if (produto.nome === nome){
                return produto
            }
        })
        return null
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