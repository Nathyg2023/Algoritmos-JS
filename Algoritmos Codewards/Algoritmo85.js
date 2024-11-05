/*7. Ordenar objetos por propiedad:

Enunciado: Escribe una función que ordene un array de objetos por una propiedad específica.
Ejemplo de entrada y salida:
const personas = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Carlos', edad: 35 }
];
const personasOrdenadas = ordenarPorEdad(personas);
console.log(personasOrdenadas);
// Salida: [{ nombre: 'Ana', edad: 25 }, { nombre: 'Juan', edad: 30 }, { nombre: 'Carlos', edad: 35 }]*/
const persons = [
    { 
    nombre: 'Juan', 
    edad: 30 },
    { 
    nombre: 'Ana', 
    edad: 25 },
    { 
    nombre: 'Carlos', 
    edad: 35 }
  ];

  const order = persons.sort((a, b) => a.edad - b.edad)

  console.log(order)
 
//Como necesito ordenar este array de objetos según el valor de una propiedad declaro una función para utilizar en este caso el método .sort que me ordena los elemento de la matriz, siempre colocandole la fución de callback para que me los ordene de forma ascendente o descendente, sino los ordena por valor unicode, donde a sería el primer elemento y b el segundo, si al hacer la resta de este devuleve un número negativo quiere decir que a debe estar antes del orden porque es menor, de lo contrario si lo devuelve positivo significa significa que a es mayor por lo tanto viene primero b. y este resultado sde almacena en la variable order.

