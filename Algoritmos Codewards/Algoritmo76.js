/*Algoritmo 76:Pilares

Hay pilares cerca de la carretera. La distancia entre los pilares es la misma y el ancho de los pilares es el mismo. Su función acepta tres argumentos:

número de pilares (≥ 1);
distancia entre pilares (10 - 30 metros);
ancho del pilar (10 - 50 centímetros).
Calcula la distancia entre el primer y el último pilar en centímetros (sin el ancho del primer y último pilar).

Salida: pillars(2, 20, 25)) //2000 */

const pillars = (numPill, dist, width) => {
    if(numPill > 1) {
        return (numPill-2)*width + (numPill-1)*dist*100;
    } else {
          return 0;      
}
}

console.log(pillars(2, 20, 25))
console.log(pillars(11, 15, 30))
