/*Ejercicio 15:¿Cuántas veces aparece un personaje?

Escriba una función que tome dos cadenas (a y b) como argumentos. Devuelve el número de veces que a ocurre en b.*/

const myFunction = (a, b) => {
    return b.split(a).length - 1
}

console.log(myFunction('m', 'how many times does the character occur in this sentence?'))
console.log(myFunction('h', 'how many times does the character occur in this sentence?'))
console.log(myFunction('?', 'how many times does the character occur in this sentence?'))
console.log(myFunction('z', 'how many times does the character occur in this sentence?'))

/*Interpretación: utilicé el método split para separar la cadena en subcadenas con separado y se guarda en un array, luego usé la propiedad .length para para obtener la cantidad de elementos a en b y finalmente se coloca -1 ya que el método split crea una subcadena adicional después de la última ocurrencia del separador. Al restar 1, obtenemos el número de ocurrencias reales del separador en la cadena original.*/
