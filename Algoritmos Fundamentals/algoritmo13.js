/*Ejercicio 13: Comprobar si una cadena contiene otra cadena y concatenar

Escriba una función que tome dos cadenas (a y b) como argumentos. Si a contiene b, agregue b al comienzo de a. Si no, añádelo al final. Devolver la concatenación*/

const myFunction = (a, b) => { 
    return a.indexOf(b) === -1 ? a + b : b + a
}

//console.log(myFunction(' think, therefore I am', 'I'))
console.log(myFunction('lips', 's'))

/*Interpretación: se utiliza indexOf para buscar la posición de la cadena b dentro de a, si no es correcto (b no se encuentra en a) devuelve -1, ahora si es VERDADER que b no se encuentra en a, se ejecuta la primera parte del del operador ternario (a + b) y devuleve el resultado y si es FALSO (b se encuentra en a) se ejecuta la segunda parte del operador ternario (b + a)

OPERADOR TERNARIO: El operador ternario lo podemos entender como una estructura compacta para hacer condicionales. Consiste en una expresión que se evaluará y, dependiendo de si dicha evaluación fue positiva o negativa devolverá una u otra cosa*/


/* const myFunction = (a, b) => {
    if(a.includes(b)){
        return b + a;
    }else{
        return a + b
    }
} */
