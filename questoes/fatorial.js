function calcFatorial(numero) {
  var resultado = 1;
  for (var i = 1; i <= numero; i++) {
    resultado *= i;
  }
  let resolucao = numero + '! = ' + numero + 'x' + numero-- + ' = ' + resultado;
  return resolucao;
}

console.log('Resultado : ' + calcFatorial(5));
