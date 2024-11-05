/*3.-Planteamiento: Calificar la edad de una persona.

Entrada: Un número entero que representa la edad.

Salida: "Eres menor de edad" si la edad es menor que 18, o "Eres mayor de edad" si la edad es igual o mayor a 18.*/

const age = (n) => {
    if(n < 18){
        return "Eres menor de edad"
    }return "Eres mayor de edad"
}

console.log(age(15))
console.log(age(20))
