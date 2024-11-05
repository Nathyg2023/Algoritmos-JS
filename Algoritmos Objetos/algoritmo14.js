/*Ejercicio 14:Multiplica todos los valores de los objetos por x

Escribe una función que tome un objeto (a) y un número (b) como argumentos. Multiplica todos los valores de 'a' por 'b'. Devuelve el objeto resultante.*/

const myFunction = (a, b) => {
   const obj = {}
   for (let value of Object.keys(a)) {
    obj[value] = a[value] * b
   }
   return obj
  }

console.log(myFunction({a:1,b:2,c:3},3)) //{a:3,b:6,c:9}
console.log(myFunction({j:9,i:2,x:3,z:4},10)) //{j:90,i:20,x:30,z:40}
console.log(myFunction({w:15,x:22,y:13},6)) //{w:90,x:132,y:78}


