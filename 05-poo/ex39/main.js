class Carro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;
  }

  dirigir(km) {
    this.gasolinaRestante -= (km / this.consumo); 
  }

  abastecer(litros) {
    this.gasolinaRestante += litros;
  }
}

let carro = new Carro('VW', 'branco', 50, 10);
carro.dirigir(350);
carro.abastecer(50);

console.log(carro);