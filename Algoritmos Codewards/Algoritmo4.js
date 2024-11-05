//Algoritmo 4:Desafío de código All Star #18

//Cree una función que acepte una cadena y un solo carácter, y devuelva un número entero de la cantidad de veces que el segundo argumento se encuentra en el primero.
//Si no se pueden encontrar ocurrencias, se debe devolver un recuento de 0.

const strCount = (str, letter) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
        count++;
        }
    }return count;
   }
//return str.split(letter).length-1

console.log(strCount('Hello', 'o'))
console.log(strCount('Hello', 'l'))
console.log(strCount('',      'z'))

/*Interpretación:declaro la variable let count para saber cuantas veces aparece la letra en la cadena, iniciando en 0. Luego utilizo el bucle for para recorrer cada caracter de la cadena. Dentro del bucle, se compara cada carácter de la cadena (str.charAt(i)) con la letra que se quiere contar (letter),count++;: Si el carácter actual coincide con la letra, se incrementa el contador count en uno. Se compara cada carácter de la cadena (str.charAt(i)) con la letra que se quiere contar (letter)...Finalmente, una vez que se recorren todos los caracteres de la cadena, la función devuelve el valor de count, que representa el número de ocurrencias de la letra letter en la cadena str.*/