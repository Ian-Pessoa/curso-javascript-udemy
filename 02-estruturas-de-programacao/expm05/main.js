function classificarNumero(num) {
  if (num > 0 && num % 2 == 0) {
    return 'Positivo e Par';
  } else if (num > 0 && num % 2 == 1) {
    return 'Positivo e Ímpar';
  } else if (num < 0) {
    return 'Negativo';
  } else {
    return 'Neutro';
  }
};