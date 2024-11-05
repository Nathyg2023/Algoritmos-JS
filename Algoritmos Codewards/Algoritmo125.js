/*Serie de signos de exclamación n.° 1: eliminar un signo de exclamación del final de la cadena:
Elimina un signo de exclamación del final de una cadena. Para un kata principiante, puedes asumir que los datos de entrada son siempre una cadena, no es necesario verificarlo.*/

const remove = (string) => {
    return string.endsWith('!') ? string.slice(0, -1) : string
  }

console.log(remove("Hi!"))
console.log(remove("Hi!!!"))
console.log(remove("!Hi"))