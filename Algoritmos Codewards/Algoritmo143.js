//Suma de diferencias en matriz:
//Su tarea es sumar las diferencias entre pares consecutivos en la matriz en orden descendente.
//Ejemplo: [2, 1, 10]  -->  9

const sumOfDifferences = (arr) => {
    let order = arr.sort((num1,num2) => num2 -num1);
    let result2 = 0;
    for(let i = 0; i<arr.length -1; i++){
        result2 += order[i] - order[i + 1]
    }
    return result2
    //return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0
}

console.log(sumOfDifferences([1, 2, 10]))
console.log(sumOfDifferences([-3, -2, -1]))