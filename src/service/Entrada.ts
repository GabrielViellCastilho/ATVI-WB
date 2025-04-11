import promptSync from "prompt-sync";

const prompt = promptSync();

export default class Entrada {
    public receberNumero(mensagem: string): number {
        const valor = prompt(mensagem)
        const numero  = new Number(valor)
        return numero.valueOf()
    }
    public receberTexto(mensagem: string): string {
        const texto = prompt(mensagem)
        return texto
    }
}