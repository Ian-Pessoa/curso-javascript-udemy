let numero = Number(prompt('Insira um número para conferir se é um número primo:'));
let divisoes = 0;

for (let i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    divisoes++;
  }
}

if(divisoes == 2) {
  alert('O número é primo!');
} else {
  alert('O número NÃO é primo!');
}
