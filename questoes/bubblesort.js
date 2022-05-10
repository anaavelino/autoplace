function BubbleSort(arr) {
  let propsArray = arr;
  let arrayLength = propsArray.length;
  for (let i = 0; i < arrayLength; i++) {
    for (let j = i + 1; j < arrayLength; j++) {
      if (propsArray[i] > propsArray[j]) {
        let aux = propsArray[i];
        propsArray[i] = propsArray[j];
        propsArray[j] = aux;
      }
    }
  }

  return arr;
}
const arrayValores = [5, 3, 2, 4, 7, 1, 0, 6];

console.log('Array Ordenado: ' + BubbleSort(arrayValores));
