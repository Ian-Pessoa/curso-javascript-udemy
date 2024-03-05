class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua,
    this.bairro = bairro,
    this.cidade = cidade,
    this.estado = estado
  }

  set setRua(rua) {
    this.rua = rua;
  }

  set setBairro(bairro) {
    this.bairro = bairro;
  }

  set setCidade(cidade) {
    this.cidade = cidade;
  }  
  
  set setEstado(estado) {
    this.estado = estado;
  }
}

let endereco = new Endereco('Rua do leão', "Centro", "São Paulo", "SP");

endereco.setCidade = 'Rio de Janeiro';
endereco.setEstado = 'RJ';

console.log(endereco);