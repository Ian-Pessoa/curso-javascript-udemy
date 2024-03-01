function gerarNumeroAleatorio(limite) {
  return Math.ceil(Math.random()*limite);
}

console.log(gerarNumeroAleatorio(10));
console.log(gerarNumeroAleatorio(100));
console.log(gerarNumeroAleatorio(1000));

