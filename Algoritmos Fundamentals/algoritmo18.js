/*Ejercicio 18:Redondear un número a 2 decimales

Escribe una función que tome un número (a) como argumento. Redondea a al segundo dígito después del punto decimal. Devolver el número redondeado*/

const myFunction = (a) => {
    return Number(a.toFixed(2));
}

console.log(myFunction(2.12397))
console.log(myFunction(3.136))
console.log(myFunction(1.12397))
console.log(myFunction(26.1379))

/*Interpretación: utilicé el método toFixed ya que me permite colocarle un número específico de decimales a una cantidad, en este caso el valor indicado entre parentesis es la cantidad de decimales que le vamos a dejar a la cantidad(se coloca Number porque es un método de clase numérico) */






