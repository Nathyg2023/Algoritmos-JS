//El doble de viejo
/* Su función toma dos argumentos:

edad actual del padre (años)
edad actual de su hijo (años)
Calcula cuántos años hace el padre tenía el doble de la edad de su hijo (o en cuántos años tendrá el doble). La respuesta siempre es mayor o igual a 0, sin importar si fue en el pasado o es en el futuro. */

const twiceAsOld = (dadYearsOld, sonYearsOld) => {
    return Math.abs((sonYearsOld * 2) - dadYearsOld)
  }

console.log(twiceAsOld(36,7))
console.log(twiceAsOld(55,30))
console.log(twiceAsOld(42,21))
console.log(twiceAsOld(22,1))
console.log(twiceAsOld(29,0))

