/*¿Es n divisible por xey?
Crea una función que verifique si un número nes divisible por dos números x AND y . Todas las entradas son números positivos distintos de cero.*/


const isDivisible = (n, x, y) => {
    return n % x === 0 && n % y === 0;
}

console.log(isDivisible(3,3,4))
console.log(isDivisible(12,3,4))