/*3.- Filtrar números mayores que un valor:

Dado un arreglo de números, crea una función que tome un valor específico y filtre los números que sean mayores que ese valor.*/

const arrayString2 = (x) => {
    return x.filter((number) => number > 3)
}

console.log(arrayString2([1, 2, 3, 4, 5, 6, 7, 8, 9]))