class Conta {
  constructor() {
    this.saldo = 0;
  }

  deposito(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    this.saldo -= valor;
  }
}


let minhaConta = new Conta;

console.log(minhaConta);

minhaConta.deposito(200);
minhaConta.saque(100);
minhaConta.deposito(300);

console.log(minhaConta);