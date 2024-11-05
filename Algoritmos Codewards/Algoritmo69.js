/*Algoritmo 69: Eliminar el primer y el último personaje, segunda parte

Se le proporciona una cadena que contiene una secuencia de secuencias de caracteres separadas por comas.
Escribe una función que devuelva una nueva cadena que contenga las mismas secuencias de caracteres excepto la primera y la última, pero esta vez separadas por espacios.
Si la cadena de entrada está vacía o la eliminación del primer y último elemento causaría que la cadena resultante estuviera vacía, devuelva un valor vacío (representado como un valor genérico NULLen los ejemplos siguientes).*/

const  array = (string) => {
    const matriz = string.split(",");    
    if(matriz.length >= 3){
        matriz.shift();
        matriz.pop();
        return matriz.join(" ");
    }else{
        return null
    }  
}

//return arr.split(",").slice(1,-1).join(" ") || null;

console.log(array(''))
console.log(array('1'))
console.log(array('A1, B2'))
console.log(array('1,2,3'))
console.log(array('1,2,3,4'))
console.log(array('A1,B2,C3,D4,E5'))
console.log(array('A,1,23,456,78,9,Z'))
