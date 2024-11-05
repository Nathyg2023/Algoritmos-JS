/*2)Convertir nombres en iniciales:
Planteamiento: Escribe una función que tome un array de nombres completos y devuelva un nuevo array con las iniciales de cada nombre.

Entrada: ["John Doe", "Jane Smith", "Michael Johnson"]
Retorno: ["JD", "JS", "MJ"]*/

const convertName = (arr) => arr.map((item) => item.split(" ").map((element) => element[0]).join(""))

console.log(convertName(["John Doe", "Jane Smith", "Michael Johnson"]))


/*Interpretación: inicio utilizando el método map para iterar por cada uno de los elemetos y le aplico el split para dividir cada elemento en string por palabras, una vez lo tengo ya separado, utilizo nuevamente el map para recorrer estas palabras, y tomo el primer caracter de cada palabra con [0], finalmente, aplico el método join para unir las iniciales*/