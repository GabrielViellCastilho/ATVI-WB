import Cliente from "../model/Cliente";
import Listagem from "./Listagem";

export default  class ListagemClientes extends Listagem{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }


    public listar(): void {
        console.clear()
        console.log("--- Listando Clientes ---")
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`)
            console.log(`Nome Social: ${cliente.nomeSocial}`)
            console.log(`CPF: ${cliente.getCpf}`)
            console.log(`----------------------------`)
        })
    }

    public listarTop10ClientesQueMaisConsumiramServicos():void{
        console.clear()
        console.log(`--- Listando Top 10 Clientes que mais consumiram serviços ---`)
        this.clientes.sort((c1,c2) => {
            if (c1.getServicosConsumidos.length > c2.getServicosConsumidos.length){
                return 1
            } else if (c1.getServicosConsumidos.length < c2.getServicosConsumidos.length){
                return -1
            }
            return 0
        })
        
        for (let i = 0; i<10; i++){
            let  cliente = this.clientes[i]
            console.log(`----------------------------`)
            console.log(`Nome: ${cliente.nome}`)
            console.log(`Nome Social: ${cliente.nomeSocial}`)
            console.log(`CPF: ${cliente.getCpf}`)
            console.log(`Quantidade de serviços consumidos: ${cliente.getServicosConsumidos.length}`)
            console.log(`----------------------------`)
        }

    }

    public listarTop10ClientesQueMaisConsumiramProdutos():void{
        console.clear()
        console.log(`--- Listando Top 10 Clientes que mais consumiram produtos ---`)
        this.clientes.sort((c1,c2) => {
            if (c1.getProdutosConsumidos.length > c2.getProdutosConsumidos.length){
                return 1
            } else if (c1.getProdutosConsumidos.length < c2.getProdutosConsumidos.length){
                return -1
            }
            return 0
        })
        
        for (let i = 0; i<10; i++){
            let  cliente = this.clientes[i]
            console.log(`----------------------------`)
            console.log(`Nome: ${cliente.nome}`)
            console.log(`Nome Social: ${cliente.nomeSocial}`)
            console.log(`CPF: ${cliente.getCpf}`)
            console.log(`Quantidade de produto consumidos: ${cliente.getProdutosConsumidos.length}`)
            console.log(`----------------------------`)
        }

    }

    public listarTop10ClientesQueMaisConsumiram():void{
        console.clear()
        console.log(`--- Listando Top 10 Clientes que mais consumiram ---`)
        this.clientes.sort((c1,c2) => {
            
            let consumo1 = c1.getProdutosConsumidos.length + c1.getServicosConsumidos.length
            let consumo2 = c2.getProdutosConsumidos.length + c2.getServicosConsumidos.length

            if (consumo1 > consumo2){
                return 1
            } else if (consumo1 < consumo2){
                return -1
            }
            return 0
        })
        
        for (let i = 0; i<10; i++){
            let  cliente = this.clientes[i]
            console.log(`----------------------------`)
            console.log(`Nome: ${cliente.nome}`)
            console.log(`Nome Social: ${cliente.nomeSocial}`)
            console.log(`CPF: ${cliente.getCpf}`)
            console.log(`Quantidade de produto consumidos: ${cliente.getProdutosConsumidos.length}`)
            console.log(`Quantidade de produto consumidos: ${cliente.getProdutosConsumidos.length}`)
            console.log(`Total de itens consumidos: ${cliente.getProdutosConsumidos.length+cliente.getServicosConsumidos.length}`)
            console.log(`----------------------------`)
        }

    }

    public listarPorGenero(genero: string):void{
        console.clear
        console.log(`Listando pessoas do genêro ${genero}`)
        this.clientes.filter((cliente) => cliente.genero === genero).forEach((cliente) => {
                console.log(`----------------------------`)
                console.log(`Nome: ${cliente.nome}`)
                console.log(`Nome Social: ${cliente.nomeSocial}`)
                console.log(`CPF: ${cliente.getCpf}`)
                console.log(`----------------------------`)

        })
    }
    
}