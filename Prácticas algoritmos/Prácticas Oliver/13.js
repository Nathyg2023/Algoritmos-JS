/*13)Ordenar nombres por longitud de manera descendente:
Planteamiento: Escribe una función que tome un array de nombres y los ordene de manera descendente según su longitud.

Entrada: ["Alice", "Bob", "Charlie", "David", "Eve"]
Retorno: ["Charlie", "David", "Alice", "Eve", "Bob"]*/

const orderName = (name) => name.sort((a, b) => b.length -a.length)

console.log(orderName(["Alice", "Bob", "Charlie", "David", "Eve"]))
