/*Volumen de un cuboide
Bob necesita una manera rápida de calcular el volumen de un cuboide con tres valores: lengthy del cuboide. Escribe una función para ayudar a Bob con este cálculo.widthheight*/

const getVolumeOfCuboid = (length, width, height) => {
    return length * width * height
  }

console.log(getVolumeOfCuboid(1,2,2))