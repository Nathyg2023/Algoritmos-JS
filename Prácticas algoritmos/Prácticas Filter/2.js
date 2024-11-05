/*2.- Filtrar strings cortos:

Dado un arreglo de strings, crea una función que filtre y devuelva solo los strings que tienen una longitud menor o igual a 5 caracteres.*/

const arrayStrings = ["agua", "paralelepipedo", "mesa", "morado"]

const result = arrayStrings.filter((element) => element.length <= 5)

console.log(result)

const arrayString2 = (x) => {
    return x.filter((element) => element.length <= 5)
}

console.log(arrayString2(["agua", "paralelepipedo", "mesa", "morado"]))