/*Nombre en cartelera
Puede imprimir su nombre en un anuncio publicitario. Descubra cuánto le costará. Cada carácter tiene un precio predeterminado de £30, pero eso puede ser diferente si se le dan 2 parámetros en lugar de 1 (siempre 2 para Java).
No se puede utilizar el operador multiplicador "*".
Si su nombre fuera Jeong-Ho Aristotelis, el anuncio costaría £600. 20 letras * 30 = 600 (El espacio cuenta como un carácter).*/

const billboard = (name, price) => {
    if (!price) {
       price = 30; // Precio predeterminado por carácter
     }
     let costoTotal = 0;
     for (let i = 0, len = name.length; i < len; i++) {
       costoTotal += price;
     }
     return costoTotal;
}

//return name.repeat(price).length;

console.log(billboard("Jeong-Ho Aristotelis"))
console.log(billboard("Abishai Charalampos"))
console.log(billboard("Idwal Augustin"))
console.log(billboard("Hadufuns John"))
