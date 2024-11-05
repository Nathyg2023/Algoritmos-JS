/* 6 Ordenar array de objetos
Planteamiento:
Crear una función que tome un array de objetos con una propiedad "edad" y los ordene de menor a mayor según la edad.
Entrada:

Salida Esperada:
[
  { nombre: "Pedro", edad: 22 },
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 }
]*/

const array = [
    { nombre: "Pedro", edad: 30},
    { nombre: "Juan", edad: 22 },
    { nombre: "María", edad: 25 }
  ]

const result1 = (arr) => {
    return arr.sort((a, b) => a.edad - b.edad)
}

console.log(result1(array))