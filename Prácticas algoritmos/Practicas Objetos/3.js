/*3.-Algoritmo para clonar un objeto sin modificar el objeto original:Ejemplo:Entrada: {nombre: "Juan", edad: 30}Salida: {nombre: "Juan", edad: 30}*/

const obj = {
    nombre: "Juan", 
    edad: 30
} 

const obj1 = structuredClone(obj)
console.log(obj1)

const copy1 = { ...obj}
console.log(copy1)

const copy2 = Object.assign({}, obj)
console.log(copy2)




