/*GABY: Encontrar el promedio de los elementos de un array
Entrada: [12, 13, 15, 17, 19, 20]
Salida: 16*/

const calculateAverage = (notes) => notes.reduce((a, b) => a + b)/notes.length

console.log(calculateAverage([12, 13, 15, 17, 19, 20]))

/*Crear una función que reciba un array de números enteros y retorne un nuevo array donde los elementos que se encuentren en el rango de 10 a 15 sean remplazados por la palabra "premio" 
Entrada: [8,10,15,16,17,19,20,9,14,13,12]
Salida:[8,"premio","premio",16,17,19,20,"premio","premio","premio","premio"]*/

const replaceRangeNumbers = (numbers) => {
    return numbers.map((item)=> item >= 10 && item <= 15 ? "premio" : item)
}

console.log(replaceRangeNumbers([8,10,15,16,17,19,20,9,14,13,12]))