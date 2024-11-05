/*Ejercicio 10: Devolver propiedad de objeto anidado

Escribe una función que tome un objeto como argumento. En algunos casos, el objeto contiene otros objetos con algunas propiedades profundamente anidadas. Devuelve la propiedad 'b' del objeto 'a' dentro del objeto original si existe. Si no, devuelve indefinido
.*/

const myFunction = (obj) => {
    return obj && obj.a ? obj.a.b : undefined
    //return obj?.a?.b;
}

console.log(myFunction({a:1})) //undefined
console.log(myFunction({a:{b:{c:3}}})) //{c:3}
console.log(myFunction({b:{a:1}})) //undefined
console.log(myFunction({a:{b:2}})) //2

/*Interpretación:
Operador lógico AND (&&)
Este operador lógico compara dos expresiones. Si la primera se evalúa como "verdadera" (truthy), la sentencia devolverá el valor de la segunda expresión. Si la primera expresión se evalúa como "falsa"(falsy), la sentencia devolverá el valor de la primera expresión.*/