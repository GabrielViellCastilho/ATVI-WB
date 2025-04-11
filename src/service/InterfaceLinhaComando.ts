import CadastroCliente from "./CadastroCliente";
import CadastroProduto from "./CadastroProduto";
import CadastroServico from "./CadastroServico";
import Entrada from "./Entrada";
import ListagemClientes from "./ListagemClientes";
import ListagemProdutos from "./ListagemProdutos";
import ListagemServicos from "./ListagemServicos";

export default class SistemaMenu {
    private entrada: Entrada;

    constructor(
        private listagemClientes: ListagemClientes,
        private listagemProdutos: ListagemProdutos,
        private listagemServicos: ListagemServicos,
        private cadastroCliente:  CadastroCliente,
        private cadastroProduto:  CadastroProduto,
        private cadastroServico:  CadastroServico
    ) {
        this.entrada = new Entrada();
    }

    public iniciar(): void {
        let executando = true;

        while (executando) {
            console.clear();
            console.log("--- SISTEMA DE GESTÃO ---\n");
            console.log("0 - Sair");
            console.log("1 - Menu Listagem Clientes");
            console.log("2 - Menu Listagem Produtos");
            console.log("3 - Menu Listagem Serviços");
            console.log("4 - Menu Cadastro de Clientes");
            console.log("5 - Menu Cadastro de Produtos");
            console.log("6 - Menu Cadastro de Serviço")

            const opcao = this.entrada.receberNumero("\nSelecione uma opção: ");

            switch (opcao) {
                case 0:
                    executando = false;
                    console.log("\nSistema encerrado.");
                    break;
                case 1:
                    this.menuClientes();
                    break;
                case 2:
                    this.menuProdutos();
                    break;
                case 3:
                    this.menuServicos();
                    break;
                case 4:
                    this.menuCadastroDeCliente();
                    break
                case 5:
                    this.menuCadastroDeProduto();
                    break
                case 6:
                    this.menuCadastroDeServico();
                    break;
                default:
                    console.log("\nOpção inválida!");
                    this.entrada.receberTexto("\nPressione ENTER para continuar...");
            }
        }
    }

    private menuClientes(): void {
        let voltar = false;
    
        while (!voltar) {
            console.clear();
            console.log("--- MENU LISTAGEM CLIENTES ---\n");
            console.log("0 - Voltar");
            console.log("1 - Listar todos os clientes");
            console.log("2 - Top 10 clientes (mais consumiram)");
            console.log("3 - Top 10 clientes (menos consumiram)");
            console.log("4 - Top 5 clientes (maior valor)");
            console.log("5 - Filtrar por gênero");
    
            const opcao = this.entrada.receberNumero("\nSelecione: ");
    
            console.clear();
    
            switch (opcao) {
                case 0:
                    voltar = true;
                    break;
                case 1:
                    this.listagemClientes.listar();
                    break;
                case 2:
                    this.listagemClientes.listarTop10ClientesQueMaisConsumiramQuantidade();
                    break;
                case 3:
                    this.listagemClientes.listarTop10ClientesQueMenosConsumiramQuantidade();
                    break;
                case 4:
                    this.listagemClientes.listarTop5ClientesQueMaisConsumiramValor();
                    break;
                case 5:
                    const genero = this.entrada.receberTexto("Informe o gênero (M/F): ").toUpperCase();
                    if (genero === 'M' || genero === 'F') {
                        this.listagemClientes.listarPorGenero(genero);
                    } else {
                        console.log("Gênero inválido! Use M ou F.");
                    }
                    break;
                default:
                    console.log("Opção inválida!");
            }
    
            if (opcao !== 0) {
                this.entrada.receberTexto("\nPressione ENTER para continuar...");
            }
        }
    }
    
    private menuProdutos(): void {
        let voltar = false;
    
        while (!voltar) {
            console.clear();
            console.log("--- MENU PRODUTOS ---\n");
            console.log("0 - Voltar");
            console.log("1 - Listar todos os produtos");
            console.log("2 - Listar produtos mais vendidos");
            console.log("3 - Listar produtos mais vendidos por gênero");
    
            const opcao = this.entrada.receberNumero("\nSelecione uma opção: ");
            console.clear();
    
            switch (opcao) {
                case 0:
                    voltar = true;
                    break;
                case 1:
                    this.listagemProdutos.listar();
                    break;
                case 2:
                    this.listagemProdutos.listarProdutosMaisVendidos();
                    break;
                case 3:
                    const genero = this.entrada.receberTexto("Digite o gênero (ex: M, F): ");
                    this.listagemProdutos.listarProdutosMaisVendidosPorGenero(genero);
                    break;
                default:
                    console.log("Opção inválida!");
            }
    
            if (opcao !== 0) {
                this.entrada.receberTexto("\nPressione ENTER para continuar...");
            }
        }
    }
    

    private menuServicos(): void {
        let voltar = false;
    
        while (!voltar) {
            console.clear();
            console.log("--- MENU SERVIÇOS ---\n");
            console.log("0 - Voltar");
            console.log("1 - Listar todos os serviços");
            console.log("2 - Listar serviços mais consumidos");
            console.log("3 - Listar serviços mais consumidos por gênero");
    
            const opcao = this.entrada.receberNumero("\nSelecione uma opção: ");
    
            console.clear();
    
            switch (opcao) {
                case 0:
                    voltar = true;
                    break;
    
                case 1:
                    this.listagemServicos.listar();
                    break;
    
                case 2:
                    this.listagemServicos.listarServicosMaisConsumidos();
                    break;
    
                case 3:
                    const genero = this.entrada.receberTexto("Informe o gênero (M/F): ").toUpperCase();
                    if (genero === 'M' || genero === 'F') {
                        this.listagemServicos.listarServicosMaisConsumidosPorGenero(genero);
                    } else {
                        console.log("Gênero inválido! Use M ou F.");
                    }
                    break;
    
                default:
                    console.log("Opção inválida!");
            }
    
            if (opcao !== 0) {
                this.entrada.receberTexto("\nPressione ENTER para continuar...");
            }
        }
    }
    

    private menuCadastroDeCliente(): void {
        let voltar = false;
    
        while (!voltar) {
            console.clear();
            console.log("--- MENU CADASTRO DE CLIENTE ---\n");
            console.log("0 - Voltar");
            console.log("1 - Cadastrar cliente");
            console.log("2 - Atualizar cliente");
            console.log("3 - Excluir cliente");
    
            const opcao = this.entrada.receberNumero("\nSelecione: ");
    
            console.clear();
    
            switch (opcao) {
                case 0:
                    voltar = true;
                    break;
    
                case 1:
                    this.cadastroCliente.cadastrar();
                    break;
    
                case 2:
                    this.menuAtualizarCliente();
                    break;
    
                case 3:
                    this.cadastroCliente.remover();
                    break;
    
                default:
                    console.log("Opção inválida!");
            }
    
            if (opcao !== 0) {
                this.entrada.receberTexto("\nPressione ENTER para continuar...");
            }
        }
    }

    private menuAtualizarCliente(): void {
        let voltar = false;
    
        while (!voltar) {
            console.clear();
            console.log("--- MENU ATUALIZAÇÃO DE CLIENTE ---\n");
            console.log("0 - Voltar");
            console.log("1 - Atualizar nome");
            console.log("2 - Atualizar nome social");
            console.log("3 - Atualizar gênero");
            console.log("4 - Atualizar CPF");
            console.log("5 - Gerenciar RGs");
            console.log("6 - Gerenciar Telefones");
            console.log("7 - Gerenciar Produtos Consumidos");
            console.log("8 - Gerenciar Serviços Consumidos");
    
            const opcao = this.entrada.receberNumero("\nSelecione: ");
    
            if (opcao === 0) {
                voltar = true;
            } else if (opcao >= 1 && opcao <= 8) {
                this.cadastroCliente.atualizar(opcao);
            } else {
                console.log("Opção inválida!");
            }
    
            if (!voltar) {
                this.entrada.receberTexto("\nPressione ENTER para continuar...");
            }
        }
    }

    private menuCadastroDeProduto(): void {
        let voltar = false;
    
        while (!voltar) {
            console.clear();
            console.log("--- MENU CADASTRO DE PRODUTO ---\n");
            console.log("0 - Voltar");
            console.log("1 - Cadastrar produto");
            console.log("2 - Atualizar produto");
            console.log("3 - Excluir produto");
    
            const opcao = this.entrada.receberNumero("\nSelecione: ");
    
            console.clear();
    
            switch (opcao) {
                case 0:
                    voltar = true;
                    break;
    
                case 1:
                    this.cadastroProduto.cadastrar();
                    break;
    
                case 2:
                    this.menuAtualizarProduto();
                    break;
    
                case 3:
                    this.cadastroProduto.remover();
                    break;
    
                default:
                    console.log("Opção inválida!");
            }
    
            if (opcao !== 0) {
                this.entrada.receberTexto("\nPressione ENTER para continuar...");
            }
        }
    }
    
    private menuAtualizarProduto(): void {
        let voltar = false;
    
        while (!voltar) {
            console.clear();
            console.log("--- MENU ATUALIZAÇÃO DE PRODUTO ---\n");
            console.log("0 - Voltar");
            console.log("1 - Atualizar nome");
            console.log("2 - Atualizar preço");
    
            const opcao = this.entrada.receberNumero("\nSelecione: ");
    
            if (opcao === 0) {
                voltar = true;
            } else if (opcao === 1 || opcao === 2) {
                this.cadastroProduto.atualizar(opcao);
            } else {
                console.log("Opção inválida!");
            }
    
            if (!voltar) {
                this.entrada.receberTexto("\nPressione ENTER para continuar...");
            }
        }
    }
    
    private menuCadastroDeServico(): void {
        let voltar = false;
    
        while (!voltar) {
            console.clear();
            console.log("--- MENU CADASTRO DE SERVIÇO ---\n");
            console.log("0 - Voltar");
            console.log("1 - Cadastrar serviço");
            console.log("2 - Atualizar serviço");
            console.log("3 - Excluir serviço");
    
            const opcao = this.entrada.receberNumero("\nSelecione: ");
    
            console.clear();
    
            switch (opcao) {
                case 0:
                    voltar = true;
                    break;
    
                case 1:
                    this.cadastroServico.cadastrar();
                    break;
    
                case 2:
                    this.menuAtualizarServico();
                    break;
    
                case 3:
                    this.cadastroServico.remover();
                    break;
    
                default:
                    console.log("Opção inválida!");
            }
    
            if (opcao !== 0) {
                this.entrada.receberTexto("\nPressione ENTER para continuar...");
            }
        }
    }
    
    private menuAtualizarServico(): void {
        let voltar = false;
    
        while (!voltar) {
            console.clear();
            console.log("--- MENU ATUALIZAÇÃO DE SERVIÇO ---\n");
            console.log("0 - Voltar");
            console.log("1 - Atualizar nome");
            console.log("2 - Atualizar preço");
    
            const opcao = this.entrada.receberNumero("\nSelecione: ");
    
            if (opcao === 0) {
                voltar = true;
            } else if (opcao === 1 || opcao === 2) {
                this.cadastroServico.atualizar(opcao);
            } else {
                console.log("Opção inválida!");
            }
    
            if (!voltar) {
                this.entrada.receberTexto("\nPressione ENTER para continuar...");
            }
        }
    }
    
      
}
