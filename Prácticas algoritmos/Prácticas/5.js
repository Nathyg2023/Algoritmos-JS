//Convertir cadenas a mayúsculas:
//Enunciado: Dado un array de cadenas, convierte cada cadena a mayúsculas y devuelve el nuevo array.
//Entrada: ['hola', 'mundo', 'javascript']
//Salida: ['HOLA', 'MUNDO', 'JAVASCRIPT']

const stringCapitalLetter = (arr) => {
    return arr.map((item)=>item.toUpperCase())
}

console.log(stringCapitalLetter(['hola', 'mundo', 'javascript']))

//Multiplicar elementos de dos arrays:
//Enunciado: Dados dos arrays del mismo tamaño, multiplica los elementos correspondientes de ambos arrays y devuelve un nuevo array con los resultados.
//Entrada: [1, 2, 3], [4, 5, 6]
//Salida: [4, 10, 18]

const multiplyArray = (arrayOne, arrayTwo) => {
    return arrayOne.map((elemt, index)=>elemt * arrayTwo[index])
}

console.log(multiplyArray([1, 2, 3], [4, 5, 6]))

//Enunciado: Dado un array de números, eleva al cuadrado cada elemento y devuelve un nuevo array con los resultados.
//Entrada: [2, 4, 6, 8]
//Salida: [4, 16, 36, 64]

const elementSquaring = (array) => {
    return array.map((item)=> item*item)
}

console.log(elementSquaring([2, 4, 6, 8]))

//Transformar Precios: Implementa una función llamada transformarPrecios que tome como parámetro el array de productos y un factor de transformación. La función debe devolver un nuevo array donde los precios de cada producto se han multiplicado por el factor dado.
//Entrada
const productos = [
    { id: 1, nombre: 'Producto A', precio: 50, disponible: true },
    { id: 2, nombre: 'Producto B', precio: 30, disponible: false },
    { id: 3, nombre: 'Producto C', precio: 20, disponible: true },
];

const factorTransformacion = 1.1;

const transformPrice = (array, price) => {
    return array.map((item) => {
        return {
            ...item,
            precio: Math.round(item.precio * price)
    }
})
}

console.log(transformPrice(productos, factorTransformacion))

//Salida Esperada: [
//   { id: 1, nombre: 'Producto A', precio: 55, disponible: true },
//   { id: 2, nombre: 'Producto B', precio: 33, disponible: false },
//   { id: 3, nombre: 'Producto C', precio: 22, disponible: true }
// ]

const example = {
    family:["hola", "chao", "amarillo"]
}

console.log(example.family[1])
console.log(example.family[1])

const arrayDeObjetos = [
    { name: 'Juan', lastname: 'Pérez', email: 'juan@example.com' },
    { name: 'María', lastname: 'Gómez', email: 'maria@example.com' },
    { name: 'Carlos', lastname: 'Rodríguez', email: 'carlos@example.com' },
    { name: 'Ana', lastname: 'Martínez', email: 'ana@example.com' },
    { name: 'Pedro', lastname: 'López', email: 'pedro@example.com' },
    { name: 'Laura', lastname: 'Díaz', email: 'laura@example.com' },
    { name: 'Miguel', lastname: 'Sánchez', email: 'miguel@example.com' }
  ];
  
const result = arrayDeObjetos.map((item)=> {
    const {email} = item
    return {
        ...item,
        email: email.replace("com", "cl")
    }
})

  console.log(result);


/*1 Mayúsculas y minúsculas
Planteamiento:
Crear una función que tome una cadena como entrada y devuelva una nueva cadena con
todas las letras en mayúsculas y todas las letras en minúsculas.
Entrada:
mayusculasMinusculas("JavaScript");
Salida Esperada:
Mayúsculas: JAVASCRIPT
Minúsculas: javascript*/

const convertStringMin = (string) => {
    return `Mayúscula:${string.toLocaleLowerCase()}, Minúscula:${string.toLocaleUpperCase()}`
}

console.log(convertStringMin("JavaScript"))
//toLocaleLowerCase(): Retorna la cadena convertida en minúscula
//toLocaleUpperCase(): Retorna la cadena convertida en minúscula
//---------------------------------------------------------------------------------------------------------

//1.1-Dado un string convertir las mayusculas a minusculas y las minusculas a mayúsculas

const transformString = (string) => {
    return string.split('').map((item) => {
        return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
      }).join('');
}

console.log(transformString("JaVaScript"))

//---------------------------------------------------------------------------------------------------------
/* 2 Contar vocales
Planteamiento: Crear una función que tome una cadena como entrada y devuelva el número de vocales en esa cadena.
Entrada:contarVocales("Programación");
Salida Esperada:4*/

const countVowels = (string) => {
    return string.replace(/[^aeiouáéíóú]/g, "").length
}

console.log(countVowels("Programación"))

//------------------------------------------------------------------------------------------------------------





























/* 5 Obtener subcadena
Planteamiento: Crear una función que tome una cadena y dos índices como entrada, y devuelva la subcadena
que está entre esos dos índices.
Entrada: obtenerSubcadena("JavaScript", 2, 8);
Salida Esperada: vaScrip*/

const getSubstring = (string) => {
    return string.substring(2, 9)
}

console.log(getSubstring("JavaScript", 2, 8))

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

/* 7 Multiplicar elementos por un número
Planteamiento: Crear una función que tome un array de números y un número multiplicador como entrada, y
devuelva un nuevo array con todos los elementos multiplicados por el número dado.
Entrada:multiplicarPor([1, 2, 3, 4], 5);
Salida Esperada:[5, 10, 15, 20]*/

const multiplyByNumber = (array, number) => {
    return array.map((item)=> item * number)
}

console.log(multiplyByNumber([1, 2, 3, 4], 5))

/* 8 Separar números pares e impares
Planteamiento: Crear una función que tome un array de números como entrada y devuelva un objeto con dos arrays,
uno para los números pares y otro para los impares.
Entrada: separarParesImpares([1, 2, 3, 4, 5, 6]);
Salida Esperada:{
  pares: [2, 4, 6],
  impares: [1, 3, 5]
}*/

const evenAndOddNumbers =(array)=>{
    return 
}

console.log(evenAndOddNumbers([1, 2, 3, 4, 5, 6]))
