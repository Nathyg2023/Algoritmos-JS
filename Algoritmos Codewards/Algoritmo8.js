/*Algoritmo 8:Convertir una cadena en una matriz

Escriba una función para dividir una cadena y convertirla en una matriz de palabras.*/

const  stringToArray = (string) => {
    return string.split(" ")
  }

  console.log(stringToArray("Robin Singh")) //["Robin", "Singh"]
  console.log(stringToArray("I love arrays they are my favorite"))//["I", "love", "arrays", "they", "are", "my", "favorite"]  

/*Interpretación: utilicé el método split ya que me divide una cadena de texto en un arreglo de subcadenas*/