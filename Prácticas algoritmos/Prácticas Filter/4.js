/*4.- Filtrar objetos por propiedad: 

Dado un arreglo de objetos que tienen propiedades como nombre y edad, crea una función que filtre y devuelva solo los objetos cuya edad sea mayor o igual a 18.*/

const arrayObject = [
    {
    name: "Nathy",
    age: 35,
    },
    {
    name: "Omar",
    age: 37,
    },
    {
    name: "Mia",
    age: 3,
    },
    {
    name: "Jose",
    age: 7,
    }
]

const result = arrayObject.filter(value => value.age >= 18);

console.log(result)