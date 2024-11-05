//Declarar variables de diferentes tipos y mostrar sus valores en la consola:

const age = 35;
console.log("Number:", age);

const nombre = "Nathy";
console.log("String:", nombre);

const si = true;
console.log("Boolean:", si);

const indefinido = undefined;
console.log("Undefined:", indefinido);

const nulo = null;
console.log("Null:", nulo);

const simbolo = Symbol("simbolo");
console.log("Symbol:", simbolo);

const objeto = { nombre: "Juan", edad: 30 };
console.log("Object:", objeto);

const array = [1, 2, 3, 4, 5];
console.log("Array:", array);

let miApellido = "Ganzalez";
miApellido = "Gonzalez";
console.log("Variable con let:", miApellido);

// Crear funciones simples y llamarlas con diferentes argumentos:

const addition = (num) => {
  return num + num;
};
console.log(addition(5));

const myChildrens = (name1, name2) => {
  return name1 + " y " + name2;
};
console.log(myChildrens("Jose Colmenares", "Mia Colmenares"));

//Explicar y demostrar una clausura simple:

const crearSaludador = (nombreInicial) => {
  const saludo = "Hola, ";
  let nombre = nombreInicial;

  //Retorna una función de flecha anidada que, cuando se llame,
  //imprime en la consola el saludo concatenado con el nombre
  return () => {
    console.log(saludo + nombre);
  };
};

const saludarJuan = crearSaludador("Juan");
const saludarMaria = crearSaludador("María");

saludarJuan(); // Salida: Hola, Juan
saludarMaria(); // Salida: Hola, María

//Creación de Objetos: En JavaScript, los objetos se crean utilizando llaves {} y pueden contener pares de clave: valor. Las claves (también llamadas propiedades) son strings o símbolos, y los valores pueden ser cualquier tipo de dato, incluyendo otros objetos.

const persona = { nombre: "Nathy", edad: 35, ciudad: "Mérida" };
console.log(persona);

//Acceso y Manipulación de Propiedades: Para acceder a las propiedades de un objeto y manipularlas, se utiliza la notación de punto. o la notación de corchetes []

console.log(persona.nombre);
console.log(persona["edad"]);

//Modificación de Propiedades:
persona.edad = 36; // Modifica el valor de la propiedad 'edad'
persona["ciudad"] = "Trujillo"; // Otra forma de modificar una propiedad
console.log(persona);

//Agregar y Eliminar Propiedades: Puedes agregar nuevas propiedades a un objeto o eliminar propiedades existentes según sea necesario.
persona.trabajo = "Programador"; // Agrega una nueva propiedad 'trabajo'
console.log(persona);

//Eliminar Propiedad:
delete persona.ciudad; // Elimina la propiedad 'ciudad'
console.log(persona);

//Objetos Anidados: Los objetos en JavaScript pueden contener otros objetos como sus propiedades, permitiendo una estructura jerárquica.

const auto = {
  marca: "Mg",
  modelo: "6",
  especificaciones: {
    motor: "5.0L",
    potencia: "150hp",
  },
};
console.log(auto.especificaciones.motor);

//Creación de Arrays: En JavaScript, los arrays se crean utilizando corchetes [] y pueden contener cualquier tipo de dato, incluyendo otros arrays y objetos.
const number = [1, 2, 3, 4, 5];
const date = ["Juan", 30, true, { ciudad: "Barcelona" }];

//Acceso y Manipulación de Elementos: Para acceder a los elementos de un array y manipularlos, se utiliza un índice numérico basado en cero (0 para el primer elemento).

console.log(number[0]);
console.log(date[1]);

//Modificación de Elementos:
const number1 = [10, 20, 30, 40, 50];
number1[2] = 10;
console.log(number1);

const datos = ["Juan", 30, true, { ciudad: "Barcelona" }];
datos[0] = "María";
console.log(datos);

//Agregar Elementos:
number.push(6); // Agrega el número 6 al final del array
console.log(number);
datos.unshift("España"); // Agrega 'España' al principio del array
console.log(datos);

//Eliminar Elementos:
number.pop(); // Elimina el último elemento del array (en este caso, el 6)
console.log(number);
datos.shift(); // Elimina el primer elemento del array (en este caso, 'España')
console.log(datos);

//Otros Métodos Útiles:
console.log(number.length);
number.splice(1, 2); // Elimina 2 elementos a partir del índice 1
console.log(number); // Salida: [1, 4, 5]
//Iteración sobre Arrays:Puedes recorrer un array utilizando bucles como for o métodos específicos para arrays como forEach.

let arr = ["gaby", 36, "sanchez", true, false, 123];

let [valueone, , , , valuefor, ,] = arr;

const otro = arr[2];

console.log(valueone);
console.log(valuefor);
console.log(otro);

//Ejercicio rápido: Manipular un array de objetos

let biblioteca = [
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
  },
  {
    id: 2,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "Literatura infantil",
  },
  { id: 3, titulo: "1984", autor: "George Orwell", genero: "Distopía" },
];

// Función para agregar un nuevo libro
const agregarLibro = (titulo, autor, genero) => {
  const nuevoLibro = {
    id: biblioteca.length + 1, // Genera un nuevo ID automáticamente
    titulo: titulo,
    autor: autor,
    genero: genero,
  };
  biblioteca.push(nuevoLibro);
};

console.log(agregarLibro)

// Función para modificar un libro por su título
const modificarLibro = (titulo, nuevoAutor, nuevoGenero) => {
  const libroAModificar = biblioteca.find((libro) => libro.titulo === titulo);
  if (libroAModificar) {
    libroAModificar.autor = nuevoAutor;
    libroAModificar.genero = nuevoGenero;
  } else {
    console.log(`El libro "${titulo}" no existe en la biblioteca.`);
  }
};

// Función para eliminar un libro por su título
const eliminarLibro = (titulo) => {
  biblioteca = biblioteca.filter((libro) => libro.titulo !== titulo);
};

// Agregar un nuevo libro
agregarLibro(
  "Don Quijote de la Mancha",
  "Miguel de Cervantes",
  "Novela clásica"
);

// Modificar un libro existente
modificarLibro("1984", "George Orwell", "Ciencia ficción distópica");

// Eliminar un libro por su título
eliminarLibro("El principito");

// Mostrar la biblioteca actualizada
console.log("Biblioteca Actualizada:");
console.log(biblioteca);


//Ejemploooooooooooooooooooooooooooo: DESESTRUCTURACIÓN
const preferencias = {
  color: 'Rojo',
  edad: 30,
  ciudad: 'Madrid'
};

//Desestructuro:
const { color, edad, ciudad } = preferencias;

console.log(color);
console.log(edad);
console.log(ciudad);

//Ejemploooooooooooooooooooooooooooo
const dataUser = {
  name: "Gabriela",
  lastname: "35Sanchez",
  "correo electronico": "gabysan@gmail.com",
  num: 36,
};

const { name, num} = dataUser;


console.log(dataUser);
console.log(dataUser["correo electronico"]);

