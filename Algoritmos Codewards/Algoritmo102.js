/*Suma de positivos:
Obtienes una serie de números y devuelves la suma de todos los positivos.*/

const  positiveSum = (arr) => {
    const result1 = arr.filter((item) => item >= 0)  
    const result2 = result1.reduce((a, b) => a + b, 0)
    return result2;
}

console.log(positiveSum(([1,2,3,4,5])))
console.log(positiveSum(([1,-2,3,4,5])))
console.log(positiveSum(([])))
console.log(positiveSum(([-1,2,3,4,-5])))