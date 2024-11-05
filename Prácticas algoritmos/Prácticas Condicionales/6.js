/*6 Planteamiento: Verificar si un estudiante aprobó o reprobó un examen.

Entrada: La calificación obtenida en el examen (número entero).

Salida: "Aprobado" si la calificación es mayor o igual a 60, o "Reprobado" si es menor a 60.*/

const notes = (num) => {
    if(num >= 60){
        return "Aprobado"
    }return "Reprobado"
}

console.log(notes(65))
console.log(notes(50))
