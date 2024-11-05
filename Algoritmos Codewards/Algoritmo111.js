/*Quitar signos de exclamación:
Función de escritura RemoveExclamationMarks que elimina todos los signos de exclamación de una cadena determinada.*/

function removeExclamationMarks(s) {
    //return s.replace(/(!)/g, "");
    return s.split('!').join("")
  }

console.log(removeExclamationMarks("Hello World!"))