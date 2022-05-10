function somaMultiplos(limite) {
  let multiplosTres = 0;
  let multiplosCinco = 0;

  for (var i = 0; i <= limite; i++) {
    if (i % 3 === 0) {
      multiplosTres += i;
    }
    if (i % 5 === 0) {
      multiplosCinco += i;
    }
  }

  return {
    tres: ' Total Multiplos de 3: ' + multiplosTres,
    cinco: ' Total Multiplos de 5: ' + multiplosCinco,
  };
}

console.log(somaMultiplos(10).tres);
console.log(somaMultiplos(10).cinco);
