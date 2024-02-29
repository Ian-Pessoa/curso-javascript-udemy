let idade = 21;
let cnh = true;

if (idade > 18 && cnh == false) {
  console.log('Vocë não tem cnh. Não pode dirigir!');
} else if (idade > 18 && cnh == true) {
  console.log('Você pode dirigir');
} else {
  console.log('Não pode dirigir!');
}