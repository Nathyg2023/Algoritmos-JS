//Planteamiento:
//Crear una función que reemplace los valores nulos o indefinidos en un array de objetos con un valor predeterminado.
const inputArray = [
  { id: 1, name: 'John', age: null },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Doe', age: undefined },
];

const replacementValue = 'N/A';

const replaceValues = (arr, value) => {
    return arr.map((item)=> {
        return {
            ...item,
            age: typeof item.age === "number" ? item.age : 
        }
    })
}





/* Salida: const outputArray = [
  { id: 1, name: 'John', age: 'N/A' },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Doe', age: 'N/A' },
]; */