/*Crear una función que reciba como parámetro un array de string y devolver en un nuevo array las palabras que sea palindromos*/

const palindromo = (arr) => {
    return arr.filter((item) => item.split("").reverse().join("") === item)
}

console.log(palindromo(['oso', 'hola', 'arepera', 'ana', 'mundo', 'anitalavalatina']))

const str = "Hola Mundo"
console.log(str.split())
console.log(str.split(""))
console.log(str.split(" "))

