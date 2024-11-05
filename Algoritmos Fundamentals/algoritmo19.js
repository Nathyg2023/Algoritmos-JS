/*Ejercicio 19: Dividir un número en sus dígitos
Escribe una función que tome un número (a) como argumento. Divide a en sus dígitos individuales y devuélvelos en una matriz. Consejo: es posible que desee cambiar el tipo de número para la división*/

const myFunction = (a) => {
    return a.toString().split('').map(Number);
}
console.log(myFunction(10))
console.log(myFunction(931))
console.log(myFunction(193278))

/*Interpretación: empiezo utilizando el método .toString con los parentesis vacios() para crear los espacios, ya que me permite convertirla en una cadena de texto . Luego .split para dividrila en un array de subcadenas, después el método .map para iterar sobre cada elemento y devolver uno nuevo. (La función Number se aplica a cada elemento del array, convirtiendo cada elemento de cadena en su correspondiente valor numérico. Esto se hace para asegurarse de que los elementos del array sean interpretados como valores numéricos en lugar de cadenas de texto*/






