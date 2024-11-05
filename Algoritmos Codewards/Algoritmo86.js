/*8. Buscar elemento en un array de objetos:

Enunciado: Escribe una función que busque un elemento en un array de objetos por una propiedad específica y devuelva el objeto encontrado.
Ejemplo de entrada y salida:
const estudiantes = [
    { id: 1, nombre: 'Luis' },
    { id: 2, nombre: 'María' },
    { id: 3, nombre: 'Ana' }
  ];
  const estudianteEncontrado = buscarEstudiantePorId(estudiantes, 2);
  console.log(estudianteEncontrado);
  // Salida: { id: 2, nombre: 'María' }*/

  const students = [
    { id: 1, 
    nombre: 'Luis' },
    { id: 2, 
    nombre: 'María' },
    { id: 3, 
    nombre: 'Ana' }
  ];

  const searchStudent = (arr, id) => arr.find((item) => item.id === id)

  console.log(searchStudent(students, 2))

//Declaro una función para filtrar la categoria y la llamé searchStudent, esta recibió dos parámetros arr que es el aray de objeto y id que es la propiedad a buscar dentro del array de objeto, luego utilicé una arrow function con el método .find, este método utiliza una función de callback, que me permite iterar en sus elemento y me devuelve el primer elemento que me cumpla la condición que yo le establezca, donde le pido que me retorne exclusivamente la categoria que sea estrictamente igual a id:2, esto lo logro con el operador de igual estricta que se encarga de verificar la igual de dos expresiones y también verifica el tipo de dato.
