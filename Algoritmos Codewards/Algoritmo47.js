/*Ejercicio 47:  Trimestre del año

Dado un mes como un número entero del 1 al 12, regrese a qué trimestre del año pertenece como un número entero.
Por ejemplo: el mes 2 (febrero), forma parte del primer trimestre; el mes 6 (junio), forma parte del segundo trimestre; y el mes 11 (noviembre), forma parte del cuarto trimestre.*/

const quarterOf = (month) => {
    return Math.ceil(month / 3)
    /* if (month < 1 || month > 12) {
        return "Mes inválido";
    }  
    const trimestre = Math.ceil(month/3);
      return trimestre; */
    }

console.log(quarterOf(3))
console.log(quarterOf(8))
console.log(quarterOf(11))

/*Interpretación: La función Math.ceil()devuelve el entero mayor o igual más próximo a un número dado*/