const verificarMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(verificarMarca.test('Marca: Nike'));
console.log(verificarMarca.test('marcos: Nike'));
console.log(verificarMarca.test('Marca: Adidas'));
console.log(verificarMarca.test('Marca: azul'));

