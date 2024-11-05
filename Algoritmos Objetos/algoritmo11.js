/*Ejercicio 11:Sumar valores de objeto

Escribe una función que tome un objeto (a) como argumento. Devuelve la suma de todos los valores de los objetos.
.*/

const myFunction = (a) => {
    return Object.values(a).reduce((total, num) => total + num, 0);
    //return Object.values(a).reduce((sum, cur) => sum + cur, 0);
  }

console.log(myFunction({a:1,b:2,c:3})) //6
console.log(myFunction({j:9,i:2,x:3,z:4})) //18
console.log(myFunction({w:15,x:22,y:13})) //50

/*Interpretación: El método Object.values() devuelve un array con los valores de un objeto. El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
*/