//Ejercicio 1: Filtrar libros por autor
/* Enunciado: Crea una función que reciba un array de libros y un autor como parámetros. La función debe devolver un nuevo array con los libros escritos por ese autor.*/

let libros = [
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "El hobbit", autor: "J.R.R. Tolkien" },
  ];

const filterBooks = (arr, autor) => {
    return arr.filter((item) => item.autor === autor)
}

console.log(filterBooks(libros, "J.R.R. Tolkien"))

//Ejercicio 2: Calcular promedio de páginas
//Enunciado: Escribe una función que reciba un array de libros y calcule el promedio de páginas de todos los libros.

let libros1 = [
    { titulo: "El señor de los anillos", paginas: 1200 },
    { titulo: "Cien años de soledad", paginas: 432 },
    { titulo: "El hobbit", paginas: 320 },
  ];

const calcularPromedioPaginas = (arr) => {
    return arr.reduce((acc, curr) => acc + curr.paginas, 0)/arr.length
}

  console.log(calcularPromedioPaginas(libros1))

//Ejercicio 3: Encontrar libro por título
/* Enunciado: Crea una función que reciba un array de libros y un título como parámetro. La función debe devolver el objeto del libro que coincida con el título proporcionado */

let libros2 = [
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "El hobbit", autor: "J.R.R. Tolkien" },
  ];

const encontrarPorTitulo = (arr, tit) => {
    return arr.find((item) => item.titulo === tit)
  }


console.log(encontrarPorTitulo(libros, "Cien años de soledad"));

//Ejercicio 4: Contar libros por autor
/* Enunciado: Escribe una función que cuente cuántos libros tiene cada autor en un array de libros y devuelva un objeto con esta información. */

let libros3 = [
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "El hobbit", autor: "J.R.R. Tolkien" },
    { titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez" }
  ];

  const contarLibrosPorAutor = (arr) => {
    let obj = {}
    arr.map((item)=> {
        obj[item.autor] = arr.filter((ele) => ele.autor === item.autor).length
    })
    return obj
}
    

console.log(contarLibrosPorAutor(libros3));

//Ejercicio 5: Fusionar arrays de libros
/* Enunciado: Crea una función que reciba dos arrays de libros y devuelva un solo array que contenga todos los libros de ambos arrays. */

let libros4 = [
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  let libros5 = [
    { titulo: "El hobbit", autor: "J.R.R. Tolkien" },
    { titulo: "Harry Potter", autor: "J.K. Rowling" },
  ];

  const fusionarArraysDeLibros = (arr1, arr2) => {
    return [...arr1, ...arr2]
  }

  console.log(fusionarArraysDeLibros(libros4, libros5))


//Ejercicio 6: Comprobar existencia de un libro
/* Enunciado: Crea una función que verifique si un libro existe en un array dado de libros, según su título y autor. */

let libros6 = [
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "El hobbit", autor: "J.R.R. Tolkien" },
  ];

const verificarExistencia = (arr, tit, aut) => {
    return arr.some((item)=> item.titulo === tit && item.autor === aut)
}

  console.log(verificarExistencia(libros6, "Cien años de soledad", "Gabriel García Márquez")); 
  console.log(verificarExistencia(libros6, "Harry Potter", "J.K. Rowling")); 

//Ejercicio 7: Calcular páginas totales por autor
/* Enunciado: Escribe una función que calcule el total de páginas escritas por cada autor en un array de libros y devuelva un objeto con esta información. */

let libros7 = [
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", paginas: 1200 },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 432 },
    { titulo: "El hobbit", autor: "J.R.R. Tolkien", paginas: 300 },
  ];
  
  const calcularPaginasTotalesPorAutor = (arr) => {
    let obj = {}
    arr.map((item)=> {
    obj[item.autor] = arr.filter((ele) => ele.autor === item.autor).reduce((acc, curr) => acc + curr.paginas, 0)
    })
    return obj
  }

  console.log(calcularPaginasTotalesPorAutor(libros7));

  //Ejercicio 8: Eliminar duplicados OJOOOOOOO
  //Enunciado: Crea una función que elimine los libros duplicados de un array dado de libros.

  // Entrada
let libros8 = [
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    { titulo: "El hobbit", autor: "J.R.R. Tolkien" },
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
  ];
  
  const eliminarDuplicados = (arr) => {
        const result =  arr.map((item) => item.titulo)
        console.log(result)
  }

  console.log(eliminarDuplicados(libros8));
  // [
  //   { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
  //   { titulo: "El hobbit", autor: "J.R.R. Tolkien" }
  // ]


//Ejercicio 9: Contar libros con más de ciertas páginas
/* Enunciado: Escribe una función que cuente cuántos libros tienen más de un número específico de páginas en un array dado de libros. */

let libros9 = [
  { titulo: "El señor de los anillos", paginas: 1200 },
  { titulo: "Cien años de soledad", paginas: 432 },
  { titulo: "El hobbit", paginas: 320 },
];

const contarLibrosMasDeXPaginas = (arr, pag) => {
  return arr.filter((item) => item.paginas > pag).length
}

console.log(contarLibrosMasDeXPaginas(libros9, 500)); 

//Ejercicio 10: Ordenar libros por autor y título
/* Enunciado: Crea una función que ordene un array de libros por autor y, dentro de cada autor, por título alfabéticamente. */

let libros10 = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  { titulo: "El hobbit", autor: "J.R.R. Tolkien" },
  { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
  { titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez" }
];

const ordenarPorAutorYTítulo = (arr) => {
  return arr.sort((title1, title2) => title1.titulo.localeCompare(title2.titulo))
}

console.log(ordenarPorAutorYTítulo(libros10));

//Ejercicio 11: Obtener autor con más libros ojooooooooooooooooooooooooooooooooooooooooooooo
/* Enunciado: Crea una función que devuelva el autor que tiene más libros en un array dado de libros. */

let libros11 = [
  { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  { titulo: "El hobbit", autor: "J.R.R. Tolkien" },
  { titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez" },
  { titulo: "Harry Potter", autor: "J.K. Rowling" },
  { titulo: "El código Da Vinci", autor: "Dan Brown" },
  { titulo: "Ángeles y demonios", autor: "Dan Brown" }
];

const autorConMasLibros = (arr) => {
    const ordenar = arr.sort((autor1, autor2) => autor1.autor.localeCompare(autor2.autor))
    const result = arr.map(({autor}) => {
      return {
      autor
      }
    })
    console.log(result)
}
console.log(autorConMasLibros(libros11)); // Salida: "J.R.R. Tolkien"

//Ejercicio: Encontrar la cadena más larga en un array de objetos
//Planteamiento: Encuentra la cadena más larga en una propiedad específica de objetos.

const datos = [
  { id: 1, 
    descripcion: 'Lorem ipsum dolor sit amet' },
  { id: 2, 
    descripcion: 'Consectetur adipiscing elit' },
  { id: 3, 
    descripcion: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas' }
];

const maxLength = (arr) => {
  const result = arr.map((item) => item.descripcion.length)
  const maxLength = Math.max(...result)
  return arr.find((item) => item.descripcion.length === maxLength).descripcion
}

console.log(maxLength(datos))

// Salida esperada: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'

//Ejercicio: Aplicar transformación a objetos
//Planteamiento: Aplica una transformación a todos los objetos de un array.

const estudiantes = [{ 
  nombre: 'Ana', 
  calificaciones: [85, 90, 78] 
},
  { 
  nombre: 'Juan', 
  calificaciones: [92, 88, 95] 
},
  { 
  nombre: 'María', 
  calificaciones: [78, 87, 93] 
}];

const tranformarArray = (arr) => {
  return arr.map((item) => {
    return {
      ...item,
      calificaciones: item.calificaciones.map((item) => item + 5)
    }
  })
}

console.log(tranformarArray(estudiantes))

/* [
  { nombre: 'Ana', calificaciones: [ 90, 95, 83 ] },
  { nombre: 'Juan', calificaciones: [ 97, 93, 100 ] },
  { nombre: 'María', calificaciones: [ 83, 92, 98 ] }
] */