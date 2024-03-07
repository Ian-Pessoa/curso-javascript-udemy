const validarUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarUsuario.test('ian_123'));
console.log(validarUsuario.test('ad'));
console.log(validarUsuario.test('11111111111111111111111111111111'));
