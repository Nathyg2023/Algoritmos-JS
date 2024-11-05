/*Algoritmo 51: Serie para principiantes n.º 1: trámites escolares

Tus compañeros de clase te pidieron que les copiaras algunos documentos. Sabes que hay 'n' compañeros y el papeleo tiene 'm' páginas.

Tu tarea es calcular cuántas páginas en blanco necesitas. Si n < 0o m < 0regreso 0.*/

const paperwork = (n, m) => {
    //return n > 0 && m > 0 ? n * m : 0
  if(n < 0 || m < 0){
    return 0
  }else{
    return n * m
  }  
}

console.log(paperwork(5,5))
console.log(paperwork(5,-5))
console.log(paperwork(-5,-5))
console.log(paperwork(-5,5))
console.log(paperwork(5,0))
