/*Ejercicio 18: Secuencia inversa

Cree una función que devuelva una matriz de enteros de n a 1 donde n>0.*/

const reverseSeq = n => {
    let arr = [];
    for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
}

console.log(reverseSeq(5))

/*Interpretación: se declara la variable arr con un arreglo vacio, para almacenar la secuencia de números, luego utilizo bucle for que inicia con el valor n, se ejecuta si i es mayor que 0  y el valor i  se decrementa en uno luego el .push para añadir más elementos al final del array*/