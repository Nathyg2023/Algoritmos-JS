/*Obtener la media de una matriz
Es el final del año académico, momento fatídico de tu informe escolar. Se deben calcular los promedios. Todos los estudiantes se acercan a ti y te ruegan que les calcules su promedio. Fácil ! Sólo necesitas escribir un guión.

Devuelve el promedio de la matriz dada redondeado hacia abajo a su número entero más cercano.

La matriz nunca estará vacía.*/

const getAverage = (marks) => {
    const result = marks.reduce((a, b) => a + b)/marks.length
    return Math.floor(result)

  }

console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,2,3,4,5,]))
console.log(getAverage([1,1,1,1,1,1,1,2]))