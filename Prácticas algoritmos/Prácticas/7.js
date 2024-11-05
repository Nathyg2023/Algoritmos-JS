/*4 Reemplazar caracteres
Planteamiento:Crear una función que tome una cadena, un carácter a buscar y un carácter de reemplazo,
y devuelva una nueva cadena con todas las ocurrencias del carácter buscado reemplazadas.
Entrada:javascript
reemplazarCaracter("JavaScript", "a", "o");
Salida Esperada: JovoScript*/

const replaceCharacters1 = (string, characterLook = a, characterReep = o) => {
    return string.replace(/[a]/g, characterReep)
}

const replaceCharacters2 = (string, characterLook = a, characterReep = o) => {
    return string.split(characterLook).join(characterReep)
}

console.log(replaceCharacters1("JavaScript", "a", "o"))
console.log(replaceCharacters2("JavaScript", "a", "o"))
