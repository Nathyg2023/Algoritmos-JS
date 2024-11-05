/*Ejercicio 37: El mensaje secreto de Jenny

Jenny ha escrito una función que devuelve un saludo a un usuario. Sin embargo, está enamorada de Johnny y le gustaría saludarlo un poco diferente. Agregó un caso especial a su función, pero cometió un error.

¿Puedes ayudarla?*/

const greet = (name) => {
    if(name === "Johnny"){
    return "Hello, my love!" 
    }else{
    return "Hello, " + name + "!";
    }
}

console.log(greet("Jim"))
console.log(greet("Jane"))
console.log(greet("Simon"))
console.log(greet("Johnny"))

/*Interpretación: Se utiliza un bucle if donde se verifica inicialmente si el nombre es jonny de ser así qie devuelve "Hello, my love! en caso contrario que me retorne, "Hello, " + name + "!"*/
