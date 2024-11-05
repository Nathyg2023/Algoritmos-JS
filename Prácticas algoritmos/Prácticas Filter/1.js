/*1.- Filtrar números pares:

Dado un arreglo de números, crea una función que filtre y devuelva solo los números pares.*/

const arrayNumber = (x) => {
    return x.filter((number) => number % 2 === 0)
}

console.log(arrayNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]))

