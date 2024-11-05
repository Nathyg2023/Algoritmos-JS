/*Ejercicio 29: Regex cuenta letras minúsculas

Su tarea es simplemente contar el número total de letras minúsculas en una cadena.*/

const lowercaseCount = (str) => {
    return (str.match(/[a-z]/g) || []).length
}

console.log(lowercaseCount("abc"))
console.log(lowercaseCount("abcABC123"))
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))

/* let count = 0;
    for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      count++;
    }
  }
  return count;  */

/*Interpretación: Se utiliza el método match que me ddevuelve todas las ocurrencias de una expresión regular dentro de una cadena y que devuelva las coincidencias encontradas dentro de esta expresión regular y coloco g para que busque en toda la cadena las coincidencias y un .length para que me indique la cantidad de letras minúsculas que encuentra en la cadena. */