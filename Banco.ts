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