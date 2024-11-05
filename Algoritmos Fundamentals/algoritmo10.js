/*Ejercicio 10: Eliminar los últimos n caracteres de la cadena

Escribe una función que tome una cadena (a) como argumento. Elimina los últimos 3 caracteres de a. Devolver el resultado*/ 

const myFunction = (a) => {
    return a.slice(0, -3)
}

console.log(myFunction('abcdefg'))

/*Interpretación: Utilicé el método slice con el signo con un primer valor en 0, y el segundo en -3 para mantener los los primeros y eliminar los últimos 3 caracteres*/