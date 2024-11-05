/*Ejercicio 4: Comprobar si la propiedad existe en el objeto

Escribir una función que toma un objeto (a) y una cadena (b) como argumento. Retorna verdadero si el objeto tiene una propiedad con la clave 'b'. Devuelve false en caso contrario. Consejo: el caso de prueba 3 es un poco complicado porque el valor de la propiedad 'z' no está definido. Pero la propiedad en sí existe.*/

const myFunction = (a, b) => {
    return b in a;
    //typeof a !== 'undefined' && a.hasOwnProperty(b)
}

console.log(myFunction({a:1,b:2,c:3},'b'))
console.log(myFunction({x:'a',y:'b',z:'c'},'a'))
console.log(myFunction({x:'a',y:'b',z:undefined},'z'))

/*Interpretación: se utiliza el operador in, ya que sirve para verificar si una propiedad existe en un objeto, devolviendo true o false de acuerdo al caso.
El método hasOwnProperty(): devuelve un booleano indicando si el objeto tiene la propiedad especificada. */