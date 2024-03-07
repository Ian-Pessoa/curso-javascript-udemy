const validarId = /\d+ID\b/;

console.log(validarId.test('blablablaID'));
console.log(validarId.test('123ID'));
console.log(validarId.test('123ID123'));


