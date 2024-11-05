/*Ejercicio 1:Accediendo a las propiedades del objeto uno

Escribe una función que tome un objeto con dos propiedades como argumento. Se debe devolver el valor del continent con clave conuntry.*/

const myFunction = (obj) => {
    return obj.country
}

console.log(myFunction({ continent: 'Asia', country: 'Japan' }))
console.log(myFunction({ country: 'Sweden', continent: 'Europe' }))

/*Interpretación: se coloca el parámetro de la función (obj) para acceder a la propiedad "country" del objeto, mediante el punto*/
