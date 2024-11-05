/*Ejercicio 34: ¿Quién va a pagar el muro?

Don Drumphet vive en un bonito barrio, pero uno de sus vecinos ha empezado a alquilar su casa. Don Drumphet quiere construir un muro entre su casa y la de su vecino, e intenta que la asociación de vecinos se lo pague. Comienza a solicitar a sus vecinos que hagan una petición para que la asociación construya el muro. Desafortunadamente para Don Drumphet, no puede leer muy bien, tiene una capacidad de atención muy limitada y solo puede recordar dos letras de cada uno de los nombres de sus vecinos. Mientras recolecta firmas, insiste en que sus vecinos sigan truncando sus nombres hasta que queden dos letras y finalmente pueda leerlas.

Su código mostrará el nombre completo del vecino y la versión truncada del nombre como una matriz. Si el número de caracteres en el nombre es menor o igual a dos, devolverá una matriz que contiene solo el nombre tal cual"*/

const whoIsPaying = (name) => {
    return name.length <= 2 ? [name] : [name,name.slice(0,2)]
}

/* if (name.length <= 2){
    return name
}else {
    const nuevoNombre = name.substring(0, 2)
    return [name, nuevoNombre];
} */

console.log(whoIsPaying("Mexico"))
console.log(whoIsPaying("Melania"))
console.log(whoIsPaying("Melissa"))
console.log(whoIsPaying("Me"))

/*Interpretación: utilizo un operador ternario donde incialmente verifico si name es menor o igual a dos de ser así que me devuelva en nombre exactamente igual , de lo contrario que me devuelva sólo las dos primeras letras del nombre utilizando el método slice*/