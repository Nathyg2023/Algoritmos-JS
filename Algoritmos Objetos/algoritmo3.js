/*Ejercicio 3: Acceso a las propiedades del objeto tres 

Escribe una función que tome un objeto con dos propiedades y una cadena como argumentos. Debería devolver el valor de la propiedad con clave igual al valor de la cadena.
*/

const myFunction = (obj, key) => {
    return obj[key]
}

console.log(myFunction({continent: 'Asia',  country: 'Japan'}, 'continent'))
console.log(myFunction({country: 'Sweden',  continent: 'Europe'}, 'country'))

/*Interpretación: se coloca el parámetro de la función (obj) para acceder al valor de la propiedad key dentro del objeto */