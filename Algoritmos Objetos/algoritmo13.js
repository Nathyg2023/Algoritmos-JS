/*Ejercicio 13: Combinar dos objetos con claves coincidentes

Escribe una función que tome dos objetos como argumentos. Desafortunadamente, la propiedad 'b' en el segundo objeto tiene la clave incorrecta. Debería llamarse 'd' en su lugar. Combine ambos objetos y corrija el nombre de propiedad incorrecto. Devuelve el objeto resultante. Debe tener las propiedades 'a', 'b', 'c', 'd' y 'e'.*/

const myFunction = (x, y) => {
    y['d'] = y['b']; //REASIGNO EL NOMBRE
    delete y.b; //ELIMINO LA PROPIEDAD QUE LE MODIFIQUÉ EL NOMBRE
    return {...x, ...y} //CONTATENAMOS LOS DOS OBJETOS
    //const { b, ...rest } = y;
    //return { ...x, ...rest, d: b };
  }

console.log(myFunction({a:1, b:2}, {c:3, b:4, e:5})) //{a:1, b:2, c:3, e:5, d:4}
console.log(myFunction({a:5, b:4}, {c:3, b:1, e:2 })) //{a:5, b:4, c:3, e:2, d:1}

/*Interpretación: */