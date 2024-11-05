//Filtrado de listas:En este kata, creará una función que toma una lista de cadenas y números enteros no negativos y devuelve una nueva lista con las cadenas filtradas.

const filter_list = (l) => {
    return l.filter((item) => Number.isInteger(item))    
  }

console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))