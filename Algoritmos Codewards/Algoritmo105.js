/*Eliminando elementos:
Tome una matriz y elimine cada segundo elemento de la matriz. Mantenga siempre el primer elemento y comience a eliminar con el siguiente elemento.*/

const removeEveryOther = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        arr.splice(i, 1); // Elimina el elemento en la posición i
      }
      return arr;
  }


console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))