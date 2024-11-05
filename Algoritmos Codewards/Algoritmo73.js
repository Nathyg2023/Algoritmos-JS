/* Crea un array de objetos que representen libros. Cada objeto debe tener propiedades como "título", "autor" y "año de publicación". Luego, utiliza un método para encontrar el libro más antiguo en el array y imprimir su título y año de publicación en la consola.

// Ejemplo de salida:

// { título: "1984", autor: "George Orwell", año: 1949 }*/

const books = [
    {título: "1984", 
    autor: "George Orwell", 
    año: 1949},
    { título: "Cien años de soledad", 
    autor: "Gabriel García Márquez", 
    año: 1967 },
    { título: "El viejo y el mar", 
    autor: "Ernest Hemingway", 
    año: 1952 },
    { título: "Matar a un ruiseñor", 
    autor: "Harper Lee", 
    año: 1960 }
  ]

const sheare = (a, b) => a.año - b.año
const sheareBook = (arr) => {
    const {año, título} = arr.sort(sheare)[0]
    return {título, año}
}

const sheareBookReduce = (arr) => {
    return arr.reduce((acc, item) => { 
         acc = acc.año < item.año ? acc : item
         const {título, año} = acc
         return {título, año}
    })
}
 
console.log(sheareBookReduce(books))
console.log(sheareBook(books))

const array = ["Luis", 3, "Nathy", "Pedro", "HTML"]
 const [, , , Cinco] = array

 console.log((Cinco))
