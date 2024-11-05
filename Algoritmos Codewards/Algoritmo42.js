/*Ejercicio 42: Devolver Negativo

En esta sencilla tarea se te da un número y tienes que hacerlo negativo. ¿Pero tal vez el número ya es negativo?*/

const makeNegative = (num) => {
    return -Math.abs(num)
}

console.log(makeNegative(42))

/*Interpretación: Math.abs(num) calcula el valor absoluto del número num, lo que significa que obtiene el valor positivo sin importar si num es positivo o negativo. Luego, el operador de negación (-) colocado delante de Math.abs(num) convierte el valor absoluto en su equivalente negativo.*/
