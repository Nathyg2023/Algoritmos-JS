/*Ejercicio 8:Creación de objetos Javascript tres

Escriba una función que tome dos matrices (a y b) como argumentos. Cree un objeto que tenga propiedades con las claves 'a' y los valores correspondientes 'b'. Devolver el objeto.
.*/

const myFunction = (a, b) => {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
    //return a.reduce((obj, key, index) => ({ ...obj, [key]: b[index] }), {});
}

const myFunction(a, b){
    const obj = {};
    for (let i = 0; i < a.length; i++) {
       obj[a[i]] = b[i];
    }
    return obj;
  }
console.log(myFunction(['a','b','c'],[1,2,3])) //{a:1,b:2,c:3}
console.log(myFunction(['w','x','y','z'],[10,9,5,2])) //{w:10,x:9,y:5,z:2}
console.log(myFunction([1,'b'],['a',2])) //{1:'a',b:2}

/*Interpretación:El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor */