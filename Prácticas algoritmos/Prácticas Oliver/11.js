/*11)	Encontrar el índice del primer nombre con más de cierta longitud:
Planteamiento: Escribe una función que tome un array de nombres y una longitud mínima como entrada, y devuelva el índice del primer nombre en el array que tenga más caracteres que la longitud mínima.

Entrada: ["Alice", "Bob", "Charlie", "David", "Eve"], Longitud mínima: 6
Retorno: 2*/

const arrayNumbers = (arr, minlength) => arr.map((num) => num.length).findIndex((num) => num > minlength)   

console.log(arrayNumbers(["Alice", "Bob", "Charlie", "David", "Eve"], 6))


