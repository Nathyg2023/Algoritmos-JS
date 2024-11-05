//Crear un array de número

const arrayNumbers = [1,2,3,4,5].reduce((acc, cur) => acc + cur)

console.log(arrayNumbers)

const obj = {
    name: "Nathy",
    age: 34,
    email: "nathyyanieris2013@gmail.com",
}

obj.height = 1.65

const {name} = obj

//Planteamiento: Pide al candidato que escriba una función que tome un array de números como entrada y devuelva el número más grande.
//Ejemplo de entrada: numeroMayor([4, 9, 2, 8, 6])
//Salida esperada: 9

const maxNumber = (arr) => {
    return Math.max(...arr)
}

console.log(maxNumber([4, 9, 2, 8, 6]))

//Planteamiento: Pide al candidato que implemente una función que ordene un array de números de manera ascendente.
//Ejemplo de entrada: ordenarAscendente([8, 3, 1, 5, 2])
//Salida esperada: [1, 2, 3, 5, 8]

const orderArray = (arr) => {
    return arr.sort((num1, num2) => num1 - num2)
}

console.log(orderArray([8, 3, 1, 5, 2]))



