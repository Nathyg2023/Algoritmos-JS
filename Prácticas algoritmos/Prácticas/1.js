//Su trabajo es devolver una única matriz que tenga primero los números ordenados en orden ascendente, seguidos de las cadenas ordenadas en orden alfabético. Los valores deben mantener su tipo original.
// Tenga en cuenta que los números escritos como cadenas son cadenas y deben ordenarse con las otras cadenas. 
//Entrada: ["Banana", "Orange", "Apple", "Mango", 0, 2, 2]. 
//Salida: [ 0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange' ]

const matrizNumber = (arr) => {
  const numbers =  arr.filter((item)=>typeof item === "number").sort((a,b)=>a-b)
  const words = arr.filter((item)=>typeof item === "string").sort()
  return [...numbers, ...words]
}

console.log(matrizNumber(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]))


