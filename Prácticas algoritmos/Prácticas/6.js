/* 6 Eliminar espacios en blanco
Planteamiento:Crear una función que tome una cadena como entrada y devuelva una nueva cadena sin espacios en blanco.
Entrada: eliminarEspacios("Hola mundo feliz");
Salida Esperada: Holamundofeliz*/

const removeSpaces = (string) => {
    return string.replace(/ /g, "")
}

console.log(removeSpaces("Hola mundo feliz"))