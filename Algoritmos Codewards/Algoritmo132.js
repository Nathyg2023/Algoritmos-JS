//Diversión simple #176: Letra inversa
//Dada una cadena str, inviértala y omita todos los caracteres no alfabéticos.

const reverseLetter = (str) => {
    let result = reversed = str.split('').reverse().filter(item => /[a-zA-Z]/.test(item)).join('');
    return result
    }
    //str.replace(/[^a-z]/gi,'').split('').reverse().join('');

console.log(reverseLetter("ultr53o?n"))
console.log(reverseLetter("ab23c"))
console.log(reverseLetter("krish21an"))