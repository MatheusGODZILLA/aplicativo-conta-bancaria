"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classe do Cliente
var Cliente = /** @class */ (function () {
    // Construtor da classe
    function Cliente(nome, saldo, email) {
        this.nome = nome;
        this.saldo = saldo;
        this.email = email;
    }
    return Cliente;
}());
// Classe da Conta
var Conta = /** @class */ (function () {
    function Conta(saldo, numeroConta, cliente) {
        this.saldo = saldo;
        this.numeroConta = numeroConta;
        this.cliente = cliente;
        this.historicoTransacoes = [];
    }
    // Método para realizar saques
    Conta.prototype.saque = function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para o saque.");
        }
        else {
            this.saldo -= valor;
            var descricaoTransacao = "Saque: R$".concat(valor);
            this.registrarTransacao(descricaoTransacao);
            console.log("Saque de ".concat(valor, " realizado com sucesso."));
            console.log("\n");
        }
    };
    // Método para realizar depósitos
    Conta.prototype.deposito = function (valor) {
        this.saldo += valor;
        var descricaoTransacao = "Dep\u00F3sito: R$".concat(valor);
        this.registrarTransacao(descricaoTransacao);
        console.log("Dep\u00F3sito de ".concat(valor, " realizado com sucesso."));
        console.log("\n");
    };
    // Método para realizar transferências
    Conta.prototype.transferencia = function (destino, transferencia) {
        if (transferencia > this.saldo) {
            console.log("Saldo insuficiente para a transferência.");
            console.log("\n");
        }
        else {
            this.saldo -= transferencia;
            destino.deposito(transferencia);
            var descricaoTransacao = "Transfer\u00EAncia para a conta ".concat(destino.numeroConta, ": R$").concat(transferencia);
            this.registrarTransacao(descricaoTransacao);
            console.log("Transfer\u00EAncia de ".concat(transferencia, " realizada com sucesso para o destinat\u00E1rio."));
            console.log("\n");
        }
    };
    // Método para exibir o saldo da conta
    Conta.prototype.mostrarSaldo = function () {
        console.log("N\u00FAmero da Conta: ".concat(this.numeroConta, "\nSaldo: R$").concat(this.saldo));
        console.log("\n");
    };
    // Método para registrar uma transação no histórico
    Conta.prototype.registrarTransacao = function (transacao) {
        this.historicoTransacoes.push(transacao);
    };
    // Método para obter o histórico de transações
    Conta.prototype.getHistoricoTransacoes = function () {
        return this.historicoTransacoes;
    };
    return Conta;
}());
// Funcionamento principal
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Cadastro inicial do cliente
console.log("//-- Cadastro inicial --//");
rl.question("Nome do Cliente: ", function (nome) {
    rl.question("Saldo Inicial: ", function (saldo) {
        rl.question("Email: ", function (email) {
            var cliente = new Cliente(nome, Number(saldo), email);
            var conta1 = new Conta(Number(saldo), 12345, cliente);
            console.log("");
            console.log("//-- Aplicativo de Conta Bancária --//");
            function menu() {
                console.log("1. Informações do Cliente e da Conta");
                console.log("2. Depósito");
                console.log("3. Saque");
                console.log("4. Transferência");
                console.log("5. Histórico de transações");
                console.log("6. Sair");
                rl.question("\nSelecione uma opção: ", function (opcao) {
                    switch (opcao) {
                        case "1":
                            console.log("Informações do Cliente:");
                            console.log("Nome: " + cliente.nome);
                            console.log("Email: " + cliente.email);
                            console.log("\nInformações da Conta:");
                            conta1.mostrarSaldo();
                            menu();
                            break;
                        case "2":
                            rl.question("\nInforme o valor para depósito: ", function (valorDeposito) {
                                conta1.deposito(Number(valorDeposito));
                                menu();
                            });
                            break;
                        case "3":
                            rl.question("\nInforme o valor para saque: ", function (valorSaque) {
                                conta1.saque(Number(valorSaque));
                                menu();
                            });
                            break;
                        case "4":
                            rl.question("Número da Conta de Destino: ", function (numeroContaDestino) {
                                var contaDestino = new Conta(0, parseInt(numeroContaDestino), new Cliente("", 0, ""));
                                if (contaDestino != null) {
                                    rl.question("\nInforme o valor para transferência: ", function (valorTransferencia) {
                                        conta1.transferencia(contaDestino, Number(valorTransferencia));
                                        menu();
                                    });
                                }
                                else {
                                    console.log("Conta de destino não encontrada.");
                                    menu();
                                }
                            });
                            break;
                        case "5":
                            var historico = conta1.getHistoricoTransacoes();
                            if (historico.length === 0) {
                                console.log("\nNenhuma transação recente encontrada.\n");
                            }
                            else {
                                console.log("\nHistórico de Transações:");
                                for (var _i = 0, historico_1 = historico; _i < historico_1.length; _i++) {
                                    var transacao = historico_1[_i];
                                    console.log(transacao);
                                }
                                console.log("\n");
                            }
                            menu();
                            break;
                        case "6":
                            console.log("\nValeu!");
                            rl.close();
                            break;
                        default:
                            console.log("\nOpção inválida. Tente novamente.");
                            menu();
                    }
                });
            }
            menu();
        });
    });
});
