/*Algoritmo 77: Vacaciones VIII - Libre de impuestos
El propósito de este kata es calcular cuántas botellas de whisky libre de impuestos tendría que comprar de modo que los ahorros sobre el precio normal de la calle cubrieran efectivamente el costo de sus vacaciones.

Se le dará el precio de venta al público (precio normal, en £ (libras)), el descuento libre de impuestos (descuento, en porcentaje) y el coste de las vacaciones (en £).

Por ejemplo, si una botella cuesta normalmente £10 y el descuento duty free es del 10%, te ahorrarás £1 por botella. Si sus vacaciones costarán £500, tendría que comprar 500 botellas para ahorrar £500, por lo que la respuesta que devolverá debería ser 500.

Otro ejemplo: si una botella cuesta normalmente £12 y el descuento duty free es del 50%, te ahorrarías £6 por botella. Si sus vacaciones costarán £1000, tendría que comprar 166,66 botellas para ahorrar £1000, por lo que su respuesta debería ser 166 botellas.*/

const dutyFree = (normPrice, discount, vac) => {
    const descuento = normPrice * (discount/100);
    const vacaciones = vac/descuento
    return Math.trunc(vacaciones)
}

console.log(dutyFree(12, 50, 1000))//166
console.log(dutyFree(17, 10, 500))//294
console.log(dutyFree(24, 35, 3000))//357

