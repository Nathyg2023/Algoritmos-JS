//Algoritmo 3:Orden de lista inverso

//En este kata, creará una función que toma una lista y devuelve una lista en el orden inverso.

const reverseList = (list) => {
    return list.reverse()
}

console.log(reverseList([1,2,3,4]))
console.log(reverseList([3,1,5,4]))

/*Interpretación: utilicé el metodo reverse() ya que invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.|*/