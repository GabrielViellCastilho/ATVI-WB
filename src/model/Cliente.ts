import CPF from "./CPF"
import Produto from "./Produto"
import RG from "./RG"
import Servico from "./Servico"
import Telefone from "./Telefone"

export default class Cliente{
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>

    public set setCpf(cpf: CPF){
        this.cpf = cpf
    }

    constructor(nome: string, nomeSocial: string, genero: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public adicionarServicoConsumido(servico: Servico): void{
        this.servicosConsumidos.push(servico)
    }

    public adicionarProdutoConsumido(produto: Produto): void{
        this.produtosConsumidos.push(produto)
    }

    public adicionarRG(valor: string, dataEmissao: Date): void{
        let rg = new RG(valor,dataEmissao)
        this.rgs.push(rg)
    }

    public adicionarTelefone(ddd: string, numero: string):void{
        let telefone = new Telefone(ddd,numero)
        this.telefones.push(telefone)
    }

    public atualizarServicoConsumido(nomeAntigo: string, nomeNovo: string): void{
        this.servicosConsumidos.forEach(servico => {
            if (servico.nome === nomeAntigo){
                servico.nome = nomeNovo
            }
        })
    }

    public atualizarProdutoConsumido(nomeAntigo: string, nomeNovo: string):void{
        this.produtosConsumidos.forEach(produto => {
            if(produto.nome === nomeAntigo){
                produto.nome = nomeNovo
            }
        })
    }

    public atualizarRg(valorRgAntigo:string, valorRgNovo: string, dataEmissaoNovo: Date):void{
        this.rgs.forEach(rg => {
            if(rg.getValor === valorRgAntigo){
                rg =new RG(valorRgNovo,dataEmissaoNovo)
            }
        })
    }

    public atualizarTelefone(numeroAntigo:string,numeroNovo:string,dddNovo:string):void{
        this.telefones.forEach(telefone => {
            if (telefone.getNumero === numeroAntigo){
                telefone = new Telefone(dddNovo,numeroNovo)
            }
        })
    }


    public deletarServicoConsumido(nomeDoServico: string):void{
        this.servicosConsumidos = this.servicosConsumidos.filter((servico: Servico)=>{
            return servico.nome !== nomeDoServico
        })
    }

    public deletarProdutoConsumido(nomeDoProduto: string):void{
        this.produtosConsumidos = this.produtosConsumidos.filter((produto: Produto) => {
            return produto.nome !== nomeDoProduto
        })
    }

    public deletarRg(valorRg: string):void{
        this.rgs = this.rgs.filter((rg: RG) => {
            return rg.getValor !== valorRg
        })
    }

    public deletarTelefone(numero: string):void{
        this.telefones = this.telefones.filter((telefone: Telefone) => {
            return telefone.getNumero !== numero
        })
    }

}