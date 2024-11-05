/* Ejercico 4:Obtener el carácter n de la cadena

Escribe una función que tome una cadena (a) y un número (n) como argumento. Devuelve el carácter enésimo de 'a' */

const myFunction = (a, n) => {
    return a[n - 1]; 
}

console.log(myFunction('abcd', 1))

/*Interpretación:Se trabaja el indice  y el parámetro n que es 1, el enésimo número es -1*/




