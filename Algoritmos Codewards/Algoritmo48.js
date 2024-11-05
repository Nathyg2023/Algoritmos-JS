/*Ejercicio 48:  Una aguja en el pajar

Escribe una función findNeedle()que tome mucha "haystack" pero que contenga una"needle"
Después de que su función encuentre la aguja, debería devolver un mensaje (como una cadena) que diga:
"found the needle at position "además indexencontró la aguja, entonces:

Ejemplo (Entrada --> Salida)*/

const findNeedle = (haystack) => {
    const index = haystack.findIndex(item => item === "needle");

    if (index !== -1) {
      return "found the needle at position " + index;
    } else {
      return "needle not found in the haystack";
    }
}

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

console.log(findNeedle(haystack_1))
console.log(findNeedle(haystack_2))
console.log(findNeedle(haystack_3))

/*Interpretación: findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1*/
