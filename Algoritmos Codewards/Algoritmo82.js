/*4. Contar la frecuencia de elementos:

Enunciado: Escribe una función que cuente la frecuencia de cada elemento en un array y devuelva un objeto con los resultados.
const letras = ['a', 'b', 'a', 'c', 'b', 'a'];
const frecuencia = contarFrecuencia(letras);
console.log(frecuencia);
Salida: { 'a': 3, 'b': 2, 'c': 1 }*/

const elementFrequency = (arr) => {
    const frecuencia = {};
    for (let i = 0; i < arr.length; i++){
    const elemento = arr[i];
    if (frecuencia[elemento]) {
      frecuencia[elemento] += 1;
    } else {
      frecuencia[elemento] = 1;
    }
  }
  return frecuencia;
}

console.log(elementFrequency(['a', 'b', 'a', 'c', 'b', 'a']))