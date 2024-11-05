/*MARIANGELY1.-Realizar una funcion que reciba como parametros dos numeros, debe realizar una operacion de suma, resta, multiplicacion y division de los dos numeros. validar que los argumentos recibidos en la funcion sean numeros, de lo contrario, retornar un texto que diga:" no se puede realizar la operacion matematicas, porque uno o los dos parametros no son numeros.*/

const mathematicalOperations = (num1, num2) => {
    let operations = `Suma: ${num1} + ${num2} = ${num1+num2}, Resta: ${num1} - ${num2} = ${num1-num2}, Multiplicación: ${num1} * ${num2} = ${num1*num2}, División: ${num1} / ${num2} =  ${num1/num2}`
    return operations === Number ? operations : "no se puede realizar la operacion matematicas, porque uno o los dos parametros no son numero"
}

console.log(mathematicalOperations(2, 5))

/*2.-Crear una funcion que reciba como parametros un array donde cada uno de sus elementos son strings, la funcion debe retornar un array con aquellos elementos que son palindromos. ejemplos(anitalavalatina, lata, arepera, carro, ala, oso)*/


const palindromesCheck = (arr) => {
      return arr.filter((item) => item.split("").reverse().join("") === item)
      /* if(arr.length < 20){
        return "es largo"
      }
      return "es corto"*/
} 

console.log(palindromesCheck(["anitalavalatina", "lata", "arepera", "carro", "ala", "oso"]))

/*3.-hacer una funcion que reciba como parametros un array de objetos con las propiedades nombre, apellido, y id, la funcion debe retornar todos los objetos en un array donde su id sea mayor a 10*/

const users = [{
    nombre: "Nathy",
    apellido: "Gonzalez",
    id: 1
    },
    {
    nombre: "Mia",
    apellido: "Colmenares",
    id: 2   
    },
    {
    nombre: "Jose",
    apellido: "Colmenares",
    id: 15   
    }]

const filterUsers = (arr) => {
    return arr.filter((item) => item.id > 10)
}

console.log(filterUsers(users))

/*4.-Hacer una funcion que reciba un array como parametro, donde sus elementos son strings y numeros. retornar un array que en el indice devuelva el tipo*/

const valueType = (arr) => {
    return arr.map((item, index) => index + " " + typeof item)
}

console.log(valueType([10, "hola", 1, "adios", 15, {}]))