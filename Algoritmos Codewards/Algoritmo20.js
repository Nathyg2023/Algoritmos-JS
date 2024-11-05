/*Ejercicio 20:Suma de múltiplos 

Encuentra la suma de todos los múltiplos de n abajo m

Tenga en cuenta: n y m son números naturales (enteros positivos) m se excluye de los múltiplos*/

const  sumMul = (n, m) => {
    const num = []
    for(let i = n; i < m; i+= n){
        num.push(i) 
    }return n < m ? num.reduce((acc, item) => acc + item) : "INVALID" 
}

console.log(sumMul(0,0))
console.log(sumMul(2,9))
console.log(sumMul(4,-7))

/*Interpretación: se declara la variable arr con un arreglo vacio, para almacenar la secuencia de números, luego utilizo bucle for que inicia con el valor n, se ejecuta si i es menor que m  y el valor i  se incrementa igual a n, luego el .push para añadir más elementos al final del array y finalmente un return con un operador condicional que contiene el método reduce*/

