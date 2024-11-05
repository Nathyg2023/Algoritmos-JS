/* Crea un objeto que represente a una persona, con las propiedades nombre, edad, género y ocupación. Luego, crea una función que reciba un objeto persona y devuelva una cadena con una presentación de la misma, por ejemplo: “Hola, me llamo Ana, tengo 25 años, soy mujer y trabajo como programadora”.
Entrada: {nombre: “Pedro”, edad: 32, género: “hombre”, ocupación: “profesor”}
Salida: “Hola, me llamo Pedro, tengo 32 años, soy hombre y trabajo como profesor” */

const obj = {
    nombre:'Pedro', 
    edad:32,
    género:'hombre', 
    ocupación:'profesor',
}

const objPerson = (obj) => {
    return `Hola, me llamo ${obj.nombre}, tengo ${obj.edad}, soy ${obj.género} y trabajo como ${obj.ocupación}`
}

console.log(objPerson(obj))


