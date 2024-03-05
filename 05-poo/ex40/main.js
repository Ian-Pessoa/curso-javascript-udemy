class ContaBancaria {
  constructor(saldoCC, saldoCP, jurosCP) {
    this.saldoCC = saldoCC,
    this.saldoCP = saldoCP,
    this.jurosCP = jurosCP
  }

  deposito(conta, valor) {
    if (conta == 'CC') {
      this.saldoCC += valor;
    } else if (conta == 'CP') {
      this.saldoCP += valor;
    } else {
      console.log('A conta não existe');
    }
  }

  saque(conta, valor) {
    if (conta == 'CC') {
      if(this.saldoCC < valor) {
        console.log('Sem  saldo suficiente para a operação!');
      } else {
        this.saldoCC -= valor;
      }

    } else if (conta == 'CP') {
      if(this.saldoCP < valor) {
        console.log('Sem  saldo suficiente para a operação!');
      } else {
        this.saldoCP -= valor;
      }

    } else {
      console.log('A conta não existe');
    }
  }

  transferirCpParaCc(valor) {
    if(this.saldoCP < valor) {
      console.log('Sem  saldo suficiente para a operação!');
    } else {
      this.saldoCP -= valor;
      this.saldoCC += valor;
    }
  }

  renderJuros() {
    let juros = (this.saldoCP * this.jurosCP) / 100;
    this.saldoCP += juros;
  }
}

class ContaEspecial extends ContaBancaria {
  constructor(saldoCC, saldoCP, jurosCP){
    super(saldoCC, saldoCP, jurosCP * 2);
  }
}

let conta = new ContaBancaria(100, 0 , 1.5);
console.log(conta);

conta.deposito('CP', 150);
console.log(conta);

conta.transferirCpParaCc(100);
conta.renderJuros();
console.log(conta);

let conta2 = new ContaEspecial(1000, 2000, 1.5);
console.log(conta2);

conta2.saque('CP', 500);
console.log(conta2);

conta2.renderJuros();
console.log(conta2);
