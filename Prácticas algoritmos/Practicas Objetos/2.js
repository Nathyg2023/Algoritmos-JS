/*2.-Algoritmo para calcular el promedio de los valores de una propiedad de un array de objetos:Ejemplo:Entrada: [{nombre: "Camiseta", precio: 20.99}, {nombre: "Pantalón", precio: 35.99}, {nombre: "Zapatos", precio: 49.99}], "precio"Salida: 35.65*/

const calculateAveragePrice = [{
    name: "Camiseta",
    price: 20.99
    },
    {
    name: "Pantalón",
    price: 35.99
    },
    {
    name: "Zapatos",
    price: 49.99
    }
] 

const result = (arr) => {
    return arr.reduce((acc, obj) => acc + obj.price, 0)/arr.length
}

console.log(result(calculateAveragePrice))