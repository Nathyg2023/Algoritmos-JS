/*Algoritmo 9: Rompe Oraciones

Escriba una función que tome una serie de palabras y las junte en una oración y devuelva la oración. Puede ignorar cualquier necesidad de desinfectar palabras o agregar puntuación, pero debe agregar espacios entre cada palabra. ¡Cuidado, no debe haber un espacio al principio o al final de la oración!*/

  const smash = (words) => {
      return words.join(" ")
  }

  console.log(smash(["hello", "world"])) 
  console.log(smash(["hello", "amazing", "world"]))
  console.log(smash(["this", "is", "a", "really", "long", "sentence"]))

/*Interpretación: join, une todos los elementos de una matriz*/