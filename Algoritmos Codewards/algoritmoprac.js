//Recibir un arreglo de letras y Devolver el mismo arreglo sin duplicados
//entrada: ["m", "a", "r", "i", "a"]
//salida: "mri"

const eliminarDuplicados = (arr) => {
    let indicador = arr.filter((valor, indice, arreglo) => arreglo.indexOf(valor) !== indice);
    return arr.filter((item, indx)=> item !== indicador[0])
}

console.log(eliminarDuplicados(["m", "a", "r", "i", "a"]))


/*En un array de objeto, que tiene las propiedades, nombre, apellido y Id, devolver el objeto completo que coincida con el objeto que se le pase como parámetro*/

const obj = [{
    nombre:"camila",
    apellido: "lares",
    id: 20
},
{
    nombre:"luis",
    apellido: "fernandez",
    id: 25
},
{
    nombre:"zaul",
    apellido: "bello",
    id: 29
},
{
    nombre:"maria",
    apellido: "linares",
    id: 18
}]

//Planteamiento: Pide al usuario la base y la altura de un triángulo y calcula su área.
//Ejemplo de entrada: base = 5, altura = 8
//Salida esperada: El área del triángulo es 20

const areaTriangle = (base, altura) => {
    return (base * altura)/2
}

console.log(areaTriangle(5, 8))

//Invertir una cadena: Planteamiento: Pide al usuario una cadena y devuelve la misma cadena invertida.
//Ejemplo de entrada: cadena = "hola"
//Salida esperada: aloh

const reverseString = (str) => {
    return str.split("").reverse().join("")
}

console.log(reverseString("hola"))

//Calcular el factorial de un número
//Planteamiento: Pide al usuario un número y calcula su factorial.
//Ejemplo de entrada: n = 5
//Salida esperada: El factorial de 5 es 120

const factorialNumber = (number) => {
    let result = 1
    for(let i = 1; i<=number; i++){
        result = result * i 
    }
    return result
}

console.log(factorialNumber(4))

//Planteamiento: Pide al usuario un arreglo de números y encuentra el número mayor.
//Ejemplo de entrada: [8, 3, 12, 5, 9]
//Salida esperada: El número mayor es 12

const arrayNumber = (arr) => {
    //return arr.sort((a, b) => a - b)[arr.length-1]
    return Math.max(...arr)
}

console.log(arrayNumber([8, 3, 12, 5, 9]))

//Sumar los elementos de un arreglo
//Planteamiento: Pide al usuario un arreglo de números y suma todos sus elementos.
//Ejemplo de entrada: [2, 4, 6, 8]
//Salida esperada: La suma de los elementos es 20

const array = (arr) =>{
    return arr.reduce((acc, item) => acc + item, 0)
}

console.log(array([2, 4, 6, 8]))

/* 5.-Crear una función que reciba un array de números del 1 al 10 y devolver la suma total de todos los números pares, aplicarlo con métodos. */

const factorialNumber1 = (arr) => {
    const result = arr.filter((item) =>item % 2 === 0)
    const result1 = result.reduce((acc, curr) => acc + curr)
    return result1
}

console.log(factorialNumber1([1,2,3,4,5,6,7,8,9,10]))

//Declara una variable que reciba como parámetro un array y un número multiplicador, donde el número se va a multiplicar por cada elemento de ese array

const array5 = (arr, num) => {
    return arr.map((item) => item * num)
}

console.log(array5([2, 3, 4], 5))
//----------------------------------------------------------------------------------------------
//Planteamiento:Supongamos que tienes dos arreglos de objetos, cada uno representando datos relacionados. Queremos combinar estos dos arreglos en una sola estructura utilizando reduce, asegurándonos de eliminar duplicados en función de un campo clave en los objetos.

const arrayUno = [
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'María', edad: 30 },
    { id: 3, nombre: 'Luis', edad: 28 }
  ];
  
  const arrayDos = [
    { id: 3, ciudad: 'Nueva York' },
    { id: 4, ciudad: 'Los Ángeles' },
    { id: 1, ciudad: 'San Francisco' }
  ];

const combinedArray = (arrayUno, arrayDos) => {
    [...arrayUno, ...arrayDos].reduce((accumulator, current) => {
        accumulator[current.id] = { ...(accumulator[current.id] || {}), ...current };
        return accumulator;
      }, {});
}

const resultArray = Object.values(combinedArray);

console.log(resultArray)

//Salida:
/*       [
    { id: 1, nombre: 'Juan', edad: 25, ciudad: 'San Francisco' },
    { id: 2, nombre: 'María', edad: 30 },
    { id: 3, nombre: 'Luis', edad: 28, ciudad: 'Nueva York' },
    { id: 4, ciudad: 'Los Ángeles' }
  ] */