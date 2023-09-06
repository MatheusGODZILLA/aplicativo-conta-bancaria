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