/*Ejercicio 43: Cadenas de retorno

Cree una función que devuelva una declaración de saludo que use una entrada; su programa debería regresar, "Hello, <name> how are you doing today?".*/


const greet = (name) => {
    return `Hello, ${name} how are you doing today?` 
}

console.log(greet("Ryan"))
console.log(greet("Shingles"))

/*Interpretación: se utiliza un template string para poder que devuelva la declaración de salida como lo solicitan*/


