/*Algoritmo 58: Reemplazar todos los puntos

Se supone que el código proporcionado reemplaza todos los puntos .en la cadena especificada strcon guiones-

Pero no funciona correctamente.

Tarea
Corrija el error para que todos podamos irnos a casa temprano.*/

var replaceDots = (str) =>  {
    return str.replace(/[.]/g, '-');
  }

console.log(replaceDots("one.two.three"))