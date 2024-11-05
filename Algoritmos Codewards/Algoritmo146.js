//Suma sin número mayor y menor
//Tarea: Suma todos los números de una matriz determinada (cq. list), excepto el elemento más alto y el más bajo (¡por valor, no por índice!).

//El elemento más alto o más bajo respectivamente es un único elemento en cada borde, incluso si hay más de uno con el mismo valor.

//Cuidado con la validación de entrada.
//Ejemplo
//{ 6, 2, 1, 8, 10 } => 16
//{ 1, 1, 11, 2, 3 } => 6

const sumArray = (array) => {
    return array.sort((a,b) => a-b).slice(1, -1).reduce((acc, item)=> acc + item)
    if (array == null || array.length <= 2) {
        return 0
      }     
}

console.log(sumArray([ 0, 1, 6, 10, 10 ]))