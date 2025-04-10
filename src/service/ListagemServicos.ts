import Servico from "../model/Servico";
import Listagem from "./Listagem";

export default  class ListagemServicos extends Listagem{
    private servicos: Array<Servico>

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }


    public listar(): void {
        console.clear()
        console.log("--- Listando Servicos ---")
        this.servicos.forEach(servico => {
            console.log(`Nome: ${servico.nome}`)
            console.log(`Preço: ${servico.preco}`)
            console.log(`----------------------------`)
        })
    }
}