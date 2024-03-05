class Retangulo {
  constructor(largura, altura) {
    if(largura <= 0 || altura <= 0) {
      throw new Error('Os números devem ser maior que zero!');
    } else {
      this.largura = largura;
      this.altura = altura;
    }
  }

  calcularArea() {
    let areaDoRetangulo = this.altura * this.largura;
    return  areaDoRetangulo;
  }

  calcularPerimetro() {
    let perimetroDoRetangulo = 2 * (this.largura + this.altura);
    return perimetroDoRetangulo;
  }
}