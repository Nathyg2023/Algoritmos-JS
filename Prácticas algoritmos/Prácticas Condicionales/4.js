/*4.-Planteamiento: Determinar si un número es igual, mayor o menor que cero.

Entrada: Un número entero.

Salida: "Es igual a cero" si el número es cero, "Es mayor que cero" si es mayor que cero, o "Es menor que cero" si es menor que cero.*/

const equalNumbers = (num) => {
    if(num > 0){
        return  "Es mayor que cero"
    }else if(num < 0){
        return "Es menor que cero"    
    }else{
        return "Es igual a cero"
    }
}

console.log(equalNumbers(5))
console.log(equalNumbers(-5))
console.log(equalNumbers(0))