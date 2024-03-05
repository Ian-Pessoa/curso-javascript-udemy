class ContaBancaria {
  constructor(numeroConta, saldo) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if(valor > this.saldo) {
      console.log('Saldo insuficiente!');
    } else {
      this.saldo -= valor;
    }
  }

  consultarSaldo() {
    return this.saldo;
  }
}