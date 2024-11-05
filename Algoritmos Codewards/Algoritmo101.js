/*¿Qué tan bueno eres realmente?
Hubo un examen en tu clase y lo pasaste. ¡Felicidades!
Pero eres una persona ambiciosa. Quieres saber si eres mejor que el estudiante promedio de tu clase.
Recibirá una matriz con los puntajes de las pruebas de sus compañeros. ¡Ahora calcula el promedio y compara tu puntuación!

¡ Vuelve Truesi estás mejor, si no False!*/

const  betterThanAverage = (classPoints, yourPoints) => {
    const prom = classPoints.reduce((acc, item) => acc + item)/classPoints.length
    return prom <= yourPoints ? true : false;      
}

console.log(betterThanAverage([2, 3], 5))
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))