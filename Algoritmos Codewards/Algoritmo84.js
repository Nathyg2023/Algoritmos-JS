/*6. Filtrar objetos por propiedad:

Enunciado: Escribe una función que filtre un array de objetos en función de una propiedad específica.
Ejemplo de entrada y salida:
const productos = [
  { id: 1, nombre: 'Camiseta', categoria: 'Ropa' },
  { id: 2, nombre: 'Zapatos', categoria: 'Calzado' },
  { id: 3, nombre: 'Laptop', categoria: 'Electrónica' }
];
const categoriaFiltrada = filtrarPorCategoria(productos, 'Calzado');
console.log(categoriaFiltrada);
// Salida: [{ id: 2, nombre: 'Zapatos', categoria: 'Calzado' }]*/

const products = [
    {
    id: 1, 
    nombre: 'Camiseta', 
    categoria: 'Ropa' 
    },
    { 
    id: 2, 
    nombre: 'Zapatos', 
    categoria: 'Calzado' 
    },
    { 
    id: 3, 
    nombre: 'Laptop', 
    categoria: 'Electrónica' 
    }
]

const filterByCategory = (arr, category) => arr.find((item) => item.categoria === category)

console.log(filterByCategory(products, 'Calzado'))

//Declaro una función para filtrar la categoria y la llamé filterByCategory, esta recibió dos parámetros arr que es el aray de objeto y category que es la cadena de texto que representa la categoria que quiero buscar dentro del objeto de array, luego utilicé una arrow function con el método .find, este método utiliza una función de callback, que me permite iterar en sus elemento y me devuelve el primer elemento que me cumpla la condición que yo le establezca, donde le pido que me retorne exclusivamente la categoria que sea estrictamente igual a 'Calzado', esto lo logro con el operador de igual estricta que se encarga de verificar la igual de dos expresiones y también verifica el tipo de dato.
