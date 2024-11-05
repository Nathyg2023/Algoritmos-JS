/*Ejercicio 9:Extraer la primera mitad de la cadena

Escribe una función que tome una cadena (a) como argumento. Extraiga la primera mitad a. Devolver el resultado*/

const myFunction = (a) => {
    return a.slice(0, a.length / 2)
}

console.log(myFunction('abcdefgh'))

/*Interpretación: se utiliza el método slice, para devolver la mitad de la cadena empezando con 0, para que no afectara el inicio y el segundo valor utilicé la propiedad .length para  ver la longitud de la cadena y que devolviera la mitad*/