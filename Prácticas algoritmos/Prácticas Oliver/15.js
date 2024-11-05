/*15)Ordenar palabras alfabéticamente ignorando mayúsculas/minúsculas:
Planteamiento: Escribe una función que tome un array de palabras y las ordene alfabéticamente sin tener en cuenta las diferencias entre mayúsculas y minúsculas.

Entrada: ["apple", "banana", "Orange", "grape", "Kiwi"]
Retorno: ["apple", "banana", "grape", "Kiwi", "Orange"]*/

const orderWords = (arr) => arr.sort((a, b) => a.localeCompare(b))

console.log(orderWords(["apple", "banana", "Orange", "grape", "Kiwi"]))

//localeCompare: me permite comparar los caracteres y que aparezcan en el orden correcto