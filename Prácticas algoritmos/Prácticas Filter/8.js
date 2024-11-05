/*8.-Filtrar números primos: 

Dado un arreglo de números, crea una función que filtre y devuelva solo los números primos.*/

const arrayNumber = (number) => {
    return number.filter((element) => element % 2 !== 0)
}

console.log(arrayNumber([2,3,4,5,6,7,8]))