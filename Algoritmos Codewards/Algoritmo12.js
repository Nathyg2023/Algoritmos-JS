/*Algoritmo 12: Eliminador de vocales

Cree una función llamada shortcut para eliminar las vocales minúsculas a ( , e, i, o, u) en una cadena dada.*/

const  shortcut = (string) => {
    return string.replace(/[aeiou]+/g, '');

}

  console.log(shortcut('hello')) 
  console.log(shortcut('how are you today?'))
  console.log(shortcut('complain'))
  console.log(shortcut('never'))

/*Interpretación: utilicé este método, en este caso no con una cadena sino con una expresión regular*/