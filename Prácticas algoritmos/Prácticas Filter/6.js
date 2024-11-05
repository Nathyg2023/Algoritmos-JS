/*6.- Filtrar elementos basados en condición compleja: 

Dado un arreglo de objetos con propiedades como nombre, edad y trabajo, crea una función que filtre y devuelva solo los objetos que tengan más de 30 años y trabajen como "desarrolladores".*/

const arrayObject = [ {
    name: "Nathy",
    age: 35,
    work: "Desarrollador",
    },
    {
    name: "Omar",
    age: 37,
    work: "Desarrollador",
    },
    {
    name: "Mia",
    age: 3,
    work: "Actor",
    },
    {
    name: "Jose",
    age: 7,
    work: "Contador",
    }]

const result = arrayObject.filter((value) => value.age > 30 && value.work == "Desarrollador")

console.log(result)

