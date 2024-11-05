//********************************************STRING**********************************************************

//1.-Contar la cantidad de caracteres en una cadena:
/* Planteamiento: Obtener la longitud de una cadena dada.
Entrada: Una cadena de texto.
Salida: El número de caracteres en la cadena. */

const text = "Hola, mundo!"

const countCharacters = (str) => {
    return str.length
}
console.log(countCharacters(text))

//2.-Convertir una cadena a minúsculas:
/* Planteamiento: Convertir todos los caracteres de una cadena a minúsculas.
Entrada: Una cadena de texto.
Salida: La cadena en minúsculas. */

const text1 = "HOLA, MUNDO!"

const minCharacters = (str) => {
    return str.toLowerCase()
}

console.log(minCharacters(text1))

//3.-Revertir una cadena:
/* Planteamiento: Invertir el orden de los caracteres en una cadena.
Entrada: Una cadena de texto.
Salida: La cadena invertida-> "tpircSavaJ" */

const text2 = "JavaScript"

const reverseString = (str) => {
    return str.split("").reverse().join('')
}

console.log(reverseString(text2))

//4.-Eliminar espacios en blanco al inicio y final de una cadena:
/* Planteamiento: Eliminar los espacios en blanco al inicio y al final de una cadena.
Entrada: Una cadena de texto.
Salida: La cadena sin espacios en blanco al inicio y final */

const text3 = "   Hola, mundo!   ";

const removeSpaces = (str) => {
    return str.trim()
}

console.log(removeSpaces(text3))

//5.-Dividir una cadena en un array de palabras:
/* Planteamiento: Dividir una cadena en un array utilizando los espacios como separadores.
Entrada: Una cadena de texto.
Salida: Un array con las palabras de la cadena. */

const text4 = "JavaScript es genial";

const stringToArray = (str) => {
    return str.split(' ')
}

console.log(stringToArray(text4))

//6.-Contar ocurrencias de una subcadena en una cadena:
/* Planteamiento: Encontrar cuántas veces aparece una subcadena dentro de una cadena dada.
Entrada: Una cadena de texto y la subcadena a buscar.
Salida: La cantidad de veces que la subcadena aparece en la cadena. */

const text5 = "La vida es bella, la vida es corta";
const subtext = "vida";

const occurrencesInString = (str, substr) => {
    const subString = text5.match(/vida/gi);
    const result = subString.length;
    return result
}

console.log(occurrencesInString(text5, subtext))

//6.- Comprobar si una cadena es un palíndromo:
/* Planteamiento: Determinar si una cadena es igual si se lee de izquierda a derecha y de derecha a izquierda.
Entrada: Una cadena de texto.
Salida: Un booleano indicando si es un palíndromo o no. */

const texto1 = "Anita lava la tina";
const texto2 = "Hola mundo";

const isPalindrome = (str) => {
    const result = str.toLowerCase().replace(/[^a-z]/g, '');
    return result.split('').reverse().join('') === result
}

console.log(isPalindrome(texto1))
console.log(isPalindrome(texto2))

//7.-Reemplazar todas las ocurrencias de una subcadena en una cadena:
/* Planteamiento: Reemplazar todas las apariciones de una subcadena por otra en una cadena dada.
Entrada: Una cadena de texto, la subcadena a reemplazar y la nueva subcadena.
Salida: La cadena con las sustituciones realizadas -> "La noche está estrellada, y tiritan azules los astros";
const subtextoAntiguo = "está";
const subtextoNuevo = "es";*/

const texto = "La noche está estrellada, y tiritan azules los astros";
const subtextoAntiguo = "está";
const subtextoNuevo = "es";

const replaceString = (t, subta, subtn) => {
    return t.replace(new RegExp(subta, 'g'), subtn)
}

console.log(replaceString(texto, subtextoAntiguo, subtextoNuevo))

const textoOriginal = "Esto es una prueba de reemplazo de texto.";
const subcadenaABuscar = "prueba";
const subcadenaReemplazo = "ejemplo";

const resultado = replaceString(textoOriginal, subcadenaABuscar, subcadenaReemplazo);
console.log(resultado);

//8.-Verificar si una cadena comienza con determinado texto:
/* Planteamiento: Comprobar si una cadena empieza con cierta subcadena.
Entrada: Una cadena de texto y la subcadena a verificar.
Salida: Un booleano indicando si la cadena comienza con la subcadena dada. */

const texto5 = "JavaScript es poderoso";
const subtexto = "JavaScript";

const verifyString = (str, substr) => {
    return str.startsWith(subtexto)
}

console.log(verifyString(texto5, subtexto))

//9.-Extraer parte de una cadena según una posición y longitud:
/* Planteamiento: Obtener una porción específica de una cadena basada en una posición inicial y una longitud dada.
Entrada: Una cadena de texto, posición inicial y longitud.
Salida: La porción de la cadena extraída. */

const texto6 = "JavaScript es divertido";

const resultado1 = (str, inicio, longitud) => {
    return str.substring(inicio, longitud)
}

console.log(resultado1(texto6, 19, 14))

//10.-Convertir una cadena en un array de caracteres:
/* Planteamiento: Transformar una cadena en un array donde cada elemento es un carácter de la cadena.
Entrada: Una cadena de texto.
Salida: Un array con cada carácter de la cadena como elemento-> ["H", "o", "l", "a"]*/

const texto7 = "Hola";

const convertString = (str) => {
    return str.split("")
}

console.log(convertString(texto7))

//11.-Encontrar la posición de la primera ocurrencia de una subcadena:
/* Planteamiento: Determinar la posición inicial de la primera aparición de una subcadena dentro de una cadena.
Entrada: Una cadena de texto y la subcadena a buscar.
Salida: La posición de la primera aparición de la subcadena o -1 si no se encuentra */

const texto8 = "El desarrollo web es fascinante";
const subtexto8 = "web";

const occurrencePosition = (str, substr) => {
    return str.indexOf(substr)
}

console.log(occurrencePosition(texto8, subtexto8))

//********************************************DESESTRUCTURACIÓN**********************************************************
//1.- Extraer valores de un arreglo:
//Planteamiento: Extraer valores específicos de un arreglo utilizando la desestructuración.

const persona = ['Juan', 'Pérez', 30, 'México'];

const [nombre1, apellido, edad, pais] = persona;

console.log(nombre1)
console.log(apellido)
console.log(edad)
console.log(pais)

//2.- Extraer propiedades de un objeto anidado:
/* Planteamiento: Extraer propiedades de un objeto anidado utilizando la desestructuración. */

const persona1 = {
    nombre: 'Carlos',
    edad1: 28,
    direccion: {
      ciudad: 'Madrid',
      pais1: 'España'
    },
    medidas:{
        alto: 1.65,
        ancho: "35 cm"
    }
  };

  const { nombre, edad1, direccion: { ciudad, pais1 } } = persona1;
  const {medidas: {ancho}} = persona1
 
console.log(nombre); 
console.log(edad); 
console.log(ciudad); 
console.log(pais);
console.log(ancho)

//3.-Usar la desestructuración con valores predeterminados:
/* Planteamiento: Asignar valores predeterminados a variables al realizar la desestructuración. */

const persona4 = {
    nombre5: 'Elena',
    edad5: 30
  }

const { nombre5, edad5, ciudad5= 'Barcelona'} = persona4;

console.log(nombre5)
console.log(edad5)
console.log(ciudad5)

//********************************************ARRAYS**********************************************************

//1.-Filtrar números pares:
/* Planteamiento: Filtrar los números pares de un arreglo dado. */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = (arr) => {
    return arr.filter((num) => num % 2 === 0)
}

console.log(numerosPares(numeros))

//2.- Sumar todos los números de un arreglo:
/* Planteamiento: Calcular la suma de todos los números en un arreglo. */

const numers = [1, 2, 3, 4, 5];

const sumaDeNumeros = (arr) => {
    return arr.reduce((num1, num2) => num1 + num2, 0)
}

console.log(sumaDeNumeros(numers))

//3.-Duplicar todos los elementos de un arreglo:
/* Planteamiento: Crear un nuevo arreglo con todos los elementos duplicados del arreglo original. */

const original = [2, 4, 6, 8];

const duplicateElements = (arr) => {
    return arr.map((item) => item * 2)
}

console.log(duplicateElements(original))

//4.-Encontrar el elemento más grande en un arreglo:
/* Planteamiento: Encontrar el elemento más grande en un arreglo de números. */

const nume = [17, 5, 10, 23, 8];

const findElement =(arr) => {
    return Math.max(...arr)
}
console.log(findElement(nume))

//5.-Combinar dos arreglos en uno solo:
/* Planteamiento: Unir dos arreglos en uno solo. */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinado = array1.concat(array2)

console.log(combinado);

//6.- Encontrar elementos que cumplan una condición específica:
/* Planteamiento: Encontrar todos los elementos mayores a un valor dado en un arreglo. */

const num = [10, 20, 30, 40, 50];
const valor= 25

const numberMax = (arr, val) => {
    return arr.filter((item)=> item > val)
}

console.log(numberMax(num, valor))

//7.-Eliminar duplicados de un arreglo:
/* Planteamiento: Eliminar elementos duplicados de un arreglo. */

const frutas = ['manzana', 'plátano', 'manzana', 'naranja', 'plátano'];

const deleteRepeat = (arr) => {
    return [...new Set(frutas)]
}

console.log(deleteRepeat(frutas))

//8.-Contar la cantidad de veces que un elemento aparece en un arreglo:
/* Planteamiento: Contar la cantidad de veces que un elemento específico aparece en un arreglo. */

const colores = ['rojo', 'azul', 'verde', 'rojo', 'amarillo', 'rojo']

const repeatedQuantity = (arr) => {
    return arr.filter((item)=> item === 'rojo').length
}

console.log(repeatedQuantity(colores))

//9.- Ordenar un arreglo de números de menor a mayor:
/* Planteamiento: Ordenar un arreglo de números de menor a mayor */

const nu = [5, 3, 8, 1, 9, 2, 4];

const orderNu = (arr) => {
    return arr.sort((a,b) => a-b)
}

console.log(orderNu(nu))

//10.- Verificar si todos los elementos cumplen una condición:
//Planteamiento: Verificar si todos los elementos de un arreglo son mayores a cierto valor.

const edades = [25, 30, 28, 35];
const maxEdad = 18;

const meetTheCondition = (arr, num) => {
    return arr.every((item) => item > num)
}

console.log(meetTheCondition(edades, maxEdad))

//11.-Buscar el índice de un elemento en un arreglo:
/* Planteamiento: Encontrar el índice de un elemento específico en un arreglo. */

const frut = ['manzana', 'pera', 'uva', 'piña', 'durazno'];
const buy = 'uva'

const indexArray = (arr, fr) => {
    return arr.indexOf(fr)
}

console.log(indexArray(frut, buy))

//12.-Convertir un arreglo en una cadena separada por un delimitador:
//Planteamiento: Unir los elementos de un arreglo en una cadena usando un delimitador específico.

const elementos = ['JavaScript', 'es', 'genial'];

const bind = (arr) => {
    return arr.join('-')
}

console.log(bind(elementos))

//13.-Verificar si al menos un elemento cumple una condición:
/* Planteamiento: Verificar si al menos un elemento de un arreglo cumple una condición específica. */

const numero = [10, 20, 30, 40, 50];

const buscarNum = (arr) => {
    return arr.some((num) => num > 35)
}


console.log(buscarNum(numero))

//14.-Eliminar el último elemento de un arreglo:
/* Planteamiento: Eliminar el último elemento de un arreglo. */

let colore = ['rojo', 'verde', 'azul', 'amarillo'];

const arr1 = (arr) => {
    return arr.pop();
}

console.log(arr1(colore))

//15.-Agregar elementos al inicio de un arreglo:
/* Planteamiento: Agregar uno o más elementos al inicio de un arreglo. */

let nume1 = [2, 3, 4];

nume1.unshift(1)
console.log(nume1)
nume1.unshift(-1, 0)
console.log(nume1)

//********************************************OBJETOS**********************************************************
//1.- Recorrer las propiedades de un objeto:
//Planteamiento: Recorrer todas las propiedades de un objeto e imprimir sus valores.

const persona2 = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
  };

for(let propiedad in persona2){
    console.log(`${propiedad}:${persona2[propiedad]}`)
}

//2.-Obtener las claves (keys) de un objeto:
//Planteamiento: Obtener un array con todas las claves (keys) de un objeto.

const persona3 = {
    nombre: 'María',
    edad: 25,
    ciudad: 'Barcelona'
  };

const claves = Object.keys(persona3)
console.log(claves)

//3.-Obtener los valores de un objeto:
//Planteamiento: Obtener un array con todos los valores de un objeto.

const persona5 = {
    nombre: 'Luisa',
    edad: 28,
    ciudad: 'Valencia'
  };

const prueba2 = Object.values(persona5)
console.log(prueba2)

//4.-Combinar dos objetos:
/* Planteamiento: Combinar dos objetos en uno solo. */

const persona6 = {
    nombre: 'David',
    edad: 35
  };
  
  const detalles = {
    ciudad: 'Sevilla',
    trabajo: 'Ingeniero'
  };

  const combinarObj = {...persona6, ...detalles} 
  
  console.log(combinarObj)

//5.-Verificar si una propiedad existe en un objeto:
//Planteamiento: Verificar si una propiedad específica existe en un objeto.

const persona7 = {
    nombre: 'Laura',
    edad: 30,
    ciudad: 'Bilbao'
  };

const resultados = "edad" in persona7
console.log(resultados)

//6.-Clonar un objeto:
/* Planteamiento: Crear una copia superficial (shallow copy) de un objeto. */

const persona8 = {
    nombre: 'Elena',
    edad: 27,
    ciudad: 'Málaga'
  };

const clonar = {...persona8}
console.log(clonar)

//7.-Eliminar una propiedad de un objeto:
//Planteamiento: Eliminar una propiedad específica de un objeto.

delete persona8.ciudad
console.log(persona8)

//8.-Obtener la cantidad de propiedades de un objeto:
//Planteamiento: Calcular la cantidad de propiedades que tiene un objeto.

const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
    color: 'rojo'
  };

const countProps = Object.keys(coche).length
console.log(countProps)

//9.-Congelar un objeto para evitar cambios:
//Planteamiento: Evitar cambios en un objeto congelándolo para que no se puedan agregar, eliminar o modificar propiedades.

const producto = {
    nombre: 'Laptop',
    precio: 1200
  };

const resul = Object.freeze(producto)
console.log(resul)
producto.precio = 1500
console.log(resul)

//10.-Verificar si un objeto está vacío:
//Planteamiento: Determinar si un objeto no tiene ninguna propiedad.

const vacio = {};

const estaVacio = Object.keys(vacio).length === 0;

console.log(estaVacio)

//11.-Verificar si un objeto tiene una propiedad específica:
//Planteamiento: Verificar si un objeto tiene una propiedad determinada.

const auto = {
    marca: 'Ford',
    modelo: 'Focus',
    año: 2019
  };

const verify = auto.hasOwnProperty("año")

console.log(verify)
//***********************************************************PRACTICAS*******************************************

//Crear una función que reciba un string como parametro y devolver la cantidad de vocales que tenga ese string:

const texto9 = "Hola como estas";

const string = (str) => {
    return str.match(/[aeiou]/gi).length
}

console.log(string(texto9))

//Crear una función que reciba un string que contenga caracteres especiales, devolver ese etring sin caracteres especiales:

const texto10 = "Hola, como_estas...!";

const clearText = (str) => {
    return str.replace(/[^a-z]/gi, " ")
}

console.log(clearText(texto10))

//Crear una función que reciba un string como parametro y devolver la cantidad de consonantes que tenga ese string:

const texto11 = "Nathy Yanieris Gonzalez Gamez";

const result = (str) => {
    return str.match(/[^aeiou \s]/gi).length
}

console.log(result(texto11))

//Dado un string que contiene números y otros caracteres, utiliza una exp regular para extraer todos los numeros del string:

const string10 = "hola 123, ¡Chao!"

const stringNum = (str) => {
    return str.replace(/[^0-9]/gi, "")
}

console.log(stringNum(string10))

/*2)Convertir nombres en iniciales:
Planteamiento: Escribe una función que tome un array de nombres completos y devuelva un nuevo array con las iniciales de cada nombre.

Entrada: ["John Doe", "Jane Smith", "Michael Johnson"]
Retorno: ["JD", "JS", "MJ"]*/

const initialsNames = (arr) => {
    return arr.map((item) => item.replace(/[a-z \s]/g, ""))
}

console.log(initialsNames(["John Doe", "Jane Smith", "Michael Johnson"]))

/*3)Filtrar palabras que empiezan con una letra específica:
Planteamiento: Escribe una función que tome un array de palabras y una letra como entrada, y devuelva un nuevo array con las palabras que empiezan con la letra dada.

Entrada: ["pple", "banana", "avocado", "grape"], Letra: "a"
Retorno: ["apple", "avocado"]*/

const startLetter = (arr, letter) => {
    return arr.filter((item) => item.toLowerCase().startsWith(letter))
}

console.log(startLetter(["Apple", "banana", "avocado", "grape"], "a"))
//------------------------------------------------------------------
const nus = 15.2
const resu = Math.ceil(nus)
console.log(resu)

const nus1 = 15.8
const resu1 = Math.floor(nus1)
console.log(resu1)

