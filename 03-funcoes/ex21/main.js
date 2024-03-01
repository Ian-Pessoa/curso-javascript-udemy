function detectaTipoDeDado(dado) {
  if (typeof dado == 'number') {
    console.log('É um NUMBER');
  } else if (typeof dado == 'boolean') {
    console.log('É um BOOLEAN');
  } else if (typeof dado == 'string') {
    console.log('é uma STRING');
  } else {
    console.log('É um EMPTY VALUE');
  }
}

detectaTipoDeDado(null);
detectaTipoDeDado(false);
detectaTipoDeDado(12);
detectaTipoDeDado('Pernambuco');