/* Dado un array de nombres devuelve los que incluyen las vocales, devuelve aquello que tienen dos vocales */

const arrayName = (str1, str3, names) => {
    const result1 = names.filter((element) => element.includes(str1, str3))
    const result = result1.map((element) => [...element])
    return result
}


console.log(arrayName("i", "a", ["Jose", "Maria", "Mara", "Mari", "Mariangely"]))

/* const palabra = "carretera";
const arreglo = palabra.split("");
console.log(arreglo); */