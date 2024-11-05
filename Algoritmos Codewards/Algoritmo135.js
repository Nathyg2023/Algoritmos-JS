// Dada una cadena de palabras (x), debe devolver una matriz de palabras, ordenadas alfabéticamente por el carácter final de cada una.
// Si dos palabras tienen la misma última letra, la matriz devuelta debería mostrarlas en el orden en que aparecieron en la cadena dada.
// entrada: 'man i need a taxi up to ubud'
// salida: ['a','need','ubud', 'i','taxi','man','to','up']

const arrayString = (str) => {
    const arr = str.split(" ")
    return arr.sort((a,b)=>{
        const charA = a[a.length-1];
        const charB = b[b.length-1];
        return charA < charB ? -1: charA > charB ? 1 : 0
    })
}

console.log(arrayString('man i need a taxi up to ubud'))