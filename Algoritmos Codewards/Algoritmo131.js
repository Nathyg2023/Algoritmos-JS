//Fundamentos: Retorno
//Cree múltiples funciones que devuelvan la suma, la diferencia, el módulo, el producto, el cociente y el exponente respectivamente.
//Utilice los siguientes nombres de funciones:
//suma = agregar
//multiplicar = multiplicar
//división = dividir (se aceptan divisiones enteras y flotantes)
//módulo = mod
//exponencial = exponente
//resta = subt
//Nota: Todas las operaciones matemáticas serán: a (operación) b

const add = (a,b) => {
    return a + b
}
console.log(add(1,2))

const divide = (a,b) => {
    return a/b
}
console.log(divide(2,1))

const multiply = (a,b) => {
    return a * b
}
console.log(multiply(1,2))

const mod = (a,b)=> {
    return a % b
}
console.log(mod(1,2))
   
const exponent = (a,b) => {
    return Math.pow(a, b)
}
console.log(exponent(1,2))
    
const subt = (a,b) => {
    return a - b
}
console.log(subt(1,2))