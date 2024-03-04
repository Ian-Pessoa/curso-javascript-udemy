let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [1, 2, 3];

function verificarNumeros(array) {
  if (array.length < 5) {
    console.log('Poucos elementos');
  } else {
    console.log('Muitos elementos');
  }
}

verificarNumeros(array1);
verificarNumeros(array2);
