/*7.- Filtrar strings que contienen una letra: 

Dado un arreglo de strings, crea una función que tome una letra como argumento y filtre los strings que contengan esa letra en cualquier posición.*/

const arrayString = (e, array) => {
    return array.filter((element) => element.includes(e))
}

console.log(arrayString("e", ["hola", "rojo", "amarillo", "ojo", "verde", "helado"]))

//array: parámetro
//argumento: e