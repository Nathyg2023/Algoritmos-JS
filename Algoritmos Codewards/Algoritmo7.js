/*Algoritmo 7:obtener carácter de valor ASCII

Escriba una función que tome un número y devuelva el carácter ASCII correspondiente para ese valor.
.*/

const  getChar = (c) => {
    return String.fromCharCode(c)
  }

  console.log(getChar(55))
  console.log(getChar(57))
  console.log(getChar(56))
  console.log(getChar(58))
  console.log(getChar(59))
  
/*Interpretación: Método String.fromCharCode devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.*/