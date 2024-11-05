/*Ejercicio 36: Numero opuesto

Muy simple, dado un número entero o de punto flotante, encuentre su opuesto.*/

const opposite = (number) => {
  return number > 0 ? number * -1 : number * -1
}
//return number * (-1);  

console.log(opposite(1))
console.log(opposite(0))
console.log(opposite(4.25))
console.log(opposite(-12525220.3325))

/*Interpretación: utilizo el operador ternario dandole la condición si number es mayor a 0, que lo multiplique por -1 y si en menor a 0 que también lo multiplique por -1 y así devolverá los opuestos a los negativos y positivos */