/*Algoritmo 10:Eliminar duplicados de la lista

Defina una función que elimine los duplicados de una matriz de números no negativos y los devuelva como resultado.

El orden de la secuencia tiene que permanecer igual.*/

const  distinct = (a) => {
      return a.filter((valor, indice) => {
      return a.indexOf(valor) === indice;
  });
}

//return [...new Set(a)];
//return Array.from(new Set(a));

  console.log(distinct([1])) 
  console.log(distinct([1,2]))
  console.log(distinct([1,1,2]))

/*Interpretación: filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada y indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente*/