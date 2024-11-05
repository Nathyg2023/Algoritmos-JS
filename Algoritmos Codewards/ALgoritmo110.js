/*Eliminar espacios de cadena
Escriba una función que elimine los espacios de la cadena y luego devuelva la cadena resultante.*/

const noSpace = (x) => {
return x.split(" ").join("")
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

//Declaro una función de nombre noSpace, que recibe como parametro una cadena,utilizo una función de FileSystemDirectoryHandle, donde le pido que me retorne con el método split, que me envuelva cada uno de los caracteres en una cadena y luego con el método join, solicito unir todos estas sub cadenas o caracteres en una scrollbars.