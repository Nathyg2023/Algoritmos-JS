//Planteamiento:
//Crear una función que elimine objetos de un array basándote en un rango de valores para una propiedad específica.

const inputArray = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
  { id: 3, age: 22 },
  { id: 4, age: 35 },
];
const property = 'age';

const minAge = 25;
const maxAge = 30;

const deleteObject = (array, ageMin, ageMax) => {
    return array.filter((item)=>{
        return item.age < ageMin && item.age > ageMax
    })
}

console.log(deleteObject(inputArray, minAge, maxAge))




/* Salida: const outputArray = [
  { id: 3, age: 22 },
  { id: 4, age: 35 },
]; */

