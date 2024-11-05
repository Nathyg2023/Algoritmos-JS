/*Ejercicio 12:Eliminar una propiedad de un objeto

Escribe una función que tome un objeto como argumento. Debería devolver un objeto con todas las propiedades del objeto original. excepto la propiedad con clave 'b'
.*/

const myFunction = (obj) => {
    return delete obj.b ? obj : undefined
    //const { b, ...rest } = obj;
    //return rest;
  }

console.log(myFunction({ a: 1, b: 7, c: 3 })) //{ a: 1, c: 3 }
console.log(myFunction({ b: 0, a: 7, d: 8 })) //{ a: 7, d: 8 }
console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 })) //{ e: 6, f: 4, a: 3 }

/*Interpretación: */