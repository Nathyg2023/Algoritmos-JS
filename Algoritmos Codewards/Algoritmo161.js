//Suma las cuerdas
//Cree una función que tome 2 números enteros en forma de cadena como entrada y genere la suma (también como una cadena):
//Ejemplo: ( Entrada1, Entrada2 -->Salida )
/* "4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2" */

const sumStr = (a,b) => {
    let letterA = Number(a)
    let letterB = Number(b)
    return String(letterA + letterB) 
}

console.log(sumStr("4","5"))
console.log(sumStr("34","5"))