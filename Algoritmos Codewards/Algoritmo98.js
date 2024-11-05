/*10. Combinar objetos en un array:
Enunciado: Escribe una función que combine las propiedades de varios objetos en un nuevo objeto y los coloque en un array.
Ejemplo de entrada y salida:
const obj1 = { nombre: 'Juan', edad: 30 };
const obj2 = { ciudad: 'Madrid', ocupacion: 'Programador' };
const combinados = combinarObjetosEnArray(obj1, obj2);
console.log(combinados);
// Salida: [{ nombre: 'Juan', edad: 30, ciudad: 'Madrid', ocupacion: 'Programador' }]*/

const agreedObject = (obj1, obj2) => {
    const union = {...obj1, ...obj2}
    return [union]   
}

console.log(agreedObject({ nombre: 'Juan', edad: 30 }, { ciudad: 'Madrid', ocupacion: 'Programador'}))