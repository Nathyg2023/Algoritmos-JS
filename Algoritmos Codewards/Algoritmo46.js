/*Ejercicio 46:  Métodos del objeto String--concat() split() y su buen amigo join()

Implemente una función que acepte 2 argumentos: string y separator.

El algoritmo esperado: dividir stringen palabras por espacios, dividir cada palabra en caracteres separados y unirlos nuevamente con el especificado separator, unir todas las "palabras" resultantes nuevamente en una oración con espacios.*/

const splitAndMerge = (string, separator) =>{
    return string.split(" ").map(word=>word.split("").join(separator)).join(" ")
}
    
console.log(splitAndMerge("My name is John"," "))
console.log(splitAndMerge("My name is John","-"));
console.log(splitAndMerge("Hello World!","."));
console.log(splitAndMerge("Hello World!",","))
