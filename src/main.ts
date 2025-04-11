import Cliente from "./model/Cliente";
import CPF from "./model/CPF";
import Produto from "./model/Produto";
import Servico from "./model/Servico";
import CadastroCliente from "./service/CadastroCliente";
import CadastroProduto from "./service/CadastroProduto";
import CadastroServico from "./service/CadastroServico";
import SistemaMenu from "./service/InterfaceLinhaComando";
import ativarInterfaceLinhaDeComando from "./service/InterfaceLinhaComando";
import ListagemClientes from "./service/ListagemClientes";
import ListagemProdutos from "./service/ListagemProdutos";
import ListagemServicos from "./service/ListagemServicos";

let clientes: Array<Cliente> = []
let produtos: Array<Produto> = []
let servicos: Array<Servico> = []

clientes.push(new Cliente("Ana Souza", "Ana", "F", new CPF("111.111.111-11", new Date("1990-01-01"))));
clientes.push(new Cliente("Bruno Silva", "Bruninho", "M", new CPF("222.222.222-22", new Date("1985-05-20"))));
clientes.push(new Cliente("Carlos Lima", "Carlão", "M", new CPF("333.333.333-33", new Date("1992-07-15"))));
clientes.push(new Cliente("Daniela Rocha", "Dani", "F", new CPF("444.444.444-44", new Date("1994-02-14"))));
clientes.push(new Cliente("Eduardo Faria", "Dudu", "M", new CPF("555.555.555-55", new Date("1991-12-05"))));
clientes.push(new Cliente("Fernanda Dias", "Fe", "F", new CPF("666.666.666-66", new Date("1989-09-09"))));
clientes.push(new Cliente("Gabriel Torres", "Gabs", "M", new CPF("777.777.777-77", new Date("1993-03-17"))));
clientes.push(new Cliente("Helena Prado", "Lena", "F", new CPF("888.888.888-88", new Date("2000-10-10"))));
clientes.push(new Cliente("Igor Martins", "Igão", "M", new CPF("999.999.999-99", new Date("1996-06-06"))));
clientes.push(new Cliente("Juliana Costa", "Ju", "F", new CPF("123.456.789-00", new Date("1997-11-11"))));

clientes.push(new Cliente("Kauan Almeida", "Kau", "M", new CPF("321.654.987-00", new Date("1995-04-04"))));
clientes.push(new Cliente("Laura Neves", "Lau", "F", new CPF("654.321.987-00", new Date("1988-08-08"))));
clientes.push(new Cliente("Marcelo Pinto", "Marcelão", "M", new CPF("147.258.369-00", new Date("1986-06-15"))));
clientes.push(new Cliente("Natália Teixeira", "Naty", "F", new CPF("963.852.741-00", new Date("1990-10-20"))));
clientes.push(new Cliente("Otávio Moreira", "Tavinho", "M", new CPF("789.456.123-00", new Date("1992-03-03"))));
clientes.push(new Cliente("Paula Mendes", "Paulinha", "F", new CPF("852.963.741-00", new Date("1994-07-22"))));
clientes.push(new Cliente("Quésia Lima", "Quê", "F", new CPF("321.321.321-00", new Date("1999-09-09"))));
clientes.push(new Cliente("Renato Lopes", "Renatão", "M", new CPF("741.741.741-00", new Date("1993-12-30"))));
clientes.push(new Cliente("Sabrina Freitas", "Sá", "F", new CPF("258.258.258-00", new Date("2001-01-01"))));
clientes.push(new Cliente("Tiago Camargo", "Tico", "M", new CPF("369.369.369-00", new Date("1987-07-07"))));

clientes.push(new Cliente("Ursula Xavier", "Urs", "F", new CPF("147.147.147-00", new Date("1984-04-18"))));
clientes.push(new Cliente("Vinícius Rocha", "Vini", "M", new CPF("963.963.963-00", new Date("1983-11-03"))));
clientes.push(new Cliente("Wesley Barbosa", "Wes", "M", new CPF("852.741.963-00", new Date("1989-09-29"))));
clientes.push(new Cliente("Xuxa Souza", "Xuxu", "F", new CPF("369.258.147-00", new Date("1990-10-01"))));
clientes.push(new Cliente("Yasmin Castro", "Yas", "F", new CPF("258.147.369-00", new Date("1992-02-25"))));
clientes.push(new Cliente("Zeca Pagodinho", "Zeca", "M", new CPF("123.123.123-00", new Date("1969-02-04"))));
clientes.push(new Cliente("Amanda Luz", "Amy", "F", new CPF("111.222.333-44", new Date("1991-09-10"))));
clientes.push(new Cliente("Breno Lacerda", "Brenin", "M", new CPF("444.555.666-77", new Date("1998-08-08"))));
clientes.push(new Cliente("Cíntia Moura", "Ciça", "F", new CPF("777.888.999-00", new Date("1996-05-25"))));
clientes.push(new Cliente("Diego Nunes", "Diguinho", "M", new CPF("000.111.222-33", new Date("1985-03-03"))));


//Add produtos
for (let i = 1; i <= 20; i++) {
    let nome = `Produto ${i}`;
    let preco = Math.floor(Math.random() * 100) + 10;
    let produto = new Produto(nome, preco);
    produtos.push(produto);
}

//Add servicos
for (let i = 1; i <= 10; i++) {
    let nome = `Serviço ${i}`;
    let preco = Math.floor(Math.random() * 100) + 10;
    let servico = new Servico(nome, preco);
    servicos.push(servico);
}

adicionarConsumoAleatorio(clientes,produtos,servicos)

new SistemaMenu(
    new ListagemClientes(clientes),
    new ListagemProdutos(produtos,clientes),
    new ListagemServicos(servicos,clientes),
    new CadastroCliente(clientes,produtos,servicos),
    new CadastroProduto(produtos),
    new CadastroServico(servicos)
).iniciar()


function adicionarConsumoAleatorio(
    clientes: Array<Cliente>,
    produtos: Array<Produto>,
    servicos: Array<Servico>
): void {
    clientes.forEach(cliente => {
        const qtdProdutos = Math.floor(Math.random() * 5) + 1;
        const qtdServicos = Math.floor(Math.random() * 5) + 1;


        for (let i = 0; i < qtdProdutos; i++) {
            const produtoAleatorio = produtos[Math.floor(Math.random() * produtos.length)];
            cliente.adicionarProdutoConsumido(produtoAleatorio);
        }

        for (let i = 0; i < qtdServicos; i++) {
            const servicoAleatorio = servicos[Math.floor(Math.random() * servicos.length)];
            cliente.adicionarServicoConsumido(servicoAleatorio);
        }
    });
}
