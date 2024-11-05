/*Ejercicio 2:Acceso a las propiedades del objeto dos

Escribe una función que tome un objeto con dos propiedades como argumento. Debería devolver el valor de la propiedad con la clave 'prop-2'. Sugerencia: es posible que desee utilizar el acceso de propiedad de corchetes*/

const myFunction = (obj) => {
    return obj['prop-2'];
}

console.log(myFunction({  one: 1,  'prop-2': 2}))
console.log(myFunction({  'prop-2': 'two',  prop: 'test'}))

/*Interpretación: se coloca el parámetro de la función (obj) para acceder a la propiedad 'prop-2' del objeto. NOTA: podemos acceder a la propiedad de un objeto con [] y así se pasará el nombre de la propiedad como una cadena*/