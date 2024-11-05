// Encontrar el primer nombre con más de cierta cantidad de caracteres:
// Planteamiento: Escribe una función que tome un array de nombres y una longitud mínima como entrada, y devuelva el primer nombre en el array que tenga más caracteres que la longitud mínima.

// Entrada: ["Alice", "Bob", "Charlie", "David", "Eve"], Longitud mínima: 6
// Retorno: "Charlie"

const firstName = (arr, number) => {
    return arr.find((element) => element.length > number )
}

console.log(firstName(["Alice", "Bob", "Charlie", "David", "Eve"], 6))
