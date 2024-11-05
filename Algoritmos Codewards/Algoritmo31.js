/*Ejercicio 31: Contando ovejas

Considere una serie / lista de ovejas donde algunas ovejas pueden faltar en su lugar. Necesitamos una función que cuente el número de ovejas presentes en la matriz (verdadero significa presente).*/

const array1 = [true,  true,  true,  false, true,  true,  true,  true, true,  false, true,  false, true,  false, false, true, true,  true,  true,  true, false, false, true,  true]

const countSheeps = (arrayOfSheep) => {
    let contar = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      contar++;
    }
  }
  return contar;
}
//return arrayOfSheeps.filter(Boolean).length;

console.log(countSheeps(array1))

/*Interpretación: Declaro la variable let contar en 0, para que allí me vaya almacenando las conincidencias con true, del arreglo. Utilizo un bucle for para que me recorra el arreglo y por ultimo en el if , se verifica si el elemento en la posición i del arreglo es igual a true. Si es así, se incrementa el valor de contar en 1. Esto significa que se encontró una oveja presente y que retorne el valor de contar para que me diga la cantidad de ovejas con true en el arreglo*/