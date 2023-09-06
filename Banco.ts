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