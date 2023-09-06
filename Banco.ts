// Classe do Cliente
class Cliente {
    nome: string;
    saldo: number;
    email: string;
  
    // Construtor da classe
    constructor(nome: string, saldo: number, email: string) {
      this.nome = nome;
      this.saldo = saldo;
      this.email = email;
    }
}

// Classe da Conta
class Conta {
    saldo: number;
    numeroConta: number;
    cliente: Cliente;
    private historicoTransacoes: string[];
  
    constructor(saldo: number, numeroConta: number, cliente: Cliente) {
      this.saldo = saldo;
      this.numeroConta = numeroConta;
      this.cliente = cliente;
      this.historicoTransacoes = [];
    }
  
    // Método para realizar saques
    saque(valor: number): void {
      if (valor > this.saldo) {
        console.log("Saldo insuficiente para o saque.");
      } else {
        this.saldo -= valor;
        const descricaoTransacao = `Saque: R$${valor}`;
        this.registrarTransacao(descricaoTransacao);
        console.log(`Saque de ${valor} realizado com sucesso.`);
        console.log("\n");
      }
    }

    // Método para realizar depósitos
    deposito(valor: number): void {
      this.saldo += valor;
      const descricaoTransacao = `Depósito: R$${valor}`;
      this.registrarTransacao(descricaoTransacao);
      console.log(`Depósito de ${valor} realizado com sucesso.`);
      console.log("\n");
    }
  
    // Método para realizar transferências
    transferencia(destino: Conta, transferencia: number): void {
      if (transferencia > this.saldo) {
        console.log("Saldo insuficiente para a transferência.");
        console.log("\n");
      } else {
        this.saldo -= transferencia;
        destino.deposito(transferencia);
  
        const descricaoTransacao = `Transferência para a conta ${destino.numeroConta}: R$${transferencia}`;
        this.registrarTransacao(descricaoTransacao);
  
        console.log(`Transferência de ${transferencia} realizada com sucesso para o destinatário.`);
        console.log("\n");
      }
    }

    // Método para exibir o saldo da conta
   mostrarSaldo(): void {
     console.log(`Número da Conta: ${this.numeroConta}\nSaldo: R$${this.saldo}`);
     console.log("\n");
   }
 
   // Método para registrar uma transação no histórico
   registrarTransacao(transacao: string): void {
     this.historicoTransacoes.push(transacao);
   }
 
   // Método para obter o histórico de transações
   getHistoricoTransacoes(): string[] {
     return this.historicoTransacoes;
   }
 }

 // Funcionamento principal
 import * as readline from 'readline';
 
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
 });
 
 // Cadastro inicial do cliente
 console.log("//-- Cadastro inicial --//");
 rl.question("Nome do Cliente: ", (nome) => {
   rl.question("Saldo Inicial: ", (saldo) => {
     rl.question("Email: ", (email) => {
       const cliente = new Cliente(nome, Number(saldo), email);
       const conta1 = new Conta(Number(saldo), 12345, cliente);
 
       console.log("");
 
       console.log("//-- Aplicativo de Conta Bancária --//");
 
       function menu() {
         console.log("1. Informações do Cliente e da Conta");
         console.log("2. Depósito");
         console.log("3. Saque");
         console.log("4. Transferência");
         console.log("5. Histórico de transações");
         console.log("6. Sair");
 
         rl.question("\nSelecione uma opção: ", (opcao) => {
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
               rl.question("\nInforme o valor para depósito: ", (valorDeposito) => {
                 conta1.deposito(Number(valorDeposito));
                 menu();
               });
               break;
 
             case "3":
               rl.question("\nInforme o valor para saque: ", (valorSaque) => {
                 conta1.saque(Number(valorSaque));
                 menu();
               });
               break;
 
             case "4":
               rl.question("Número da Conta de Destino: ", (numeroContaDestino) => {
                 const contaDestino = new Conta(0, parseInt(numeroContaDestino), new Cliente("", 0, ""));
                 if (contaDestino != null) {
                   rl.question("\nInforme o valor para transferência: ", (valorTransferencia) => {
                     conta1.transferencia(contaDestino, Number(valorTransferencia));
                     menu();
                   });
                 } else {
                   console.log("Conta de destino não encontrada.");
                   menu();
                 }
               });
               break;
 
             case "5":
               const historico = conta1.getHistoricoTransacoes();
               if (historico.length === 0) {
                 console.log("\nNenhuma transação recente encontrada.\n");
               } else {
                 console.log("\nHistórico de Transações:");
                 for (const transacao of historico) {
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