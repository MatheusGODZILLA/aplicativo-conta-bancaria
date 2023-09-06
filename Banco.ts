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