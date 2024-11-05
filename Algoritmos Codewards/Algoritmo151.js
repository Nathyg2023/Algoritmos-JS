//Escribir una funcion que reciba un array de animales como parametros y una letra, debe devolver en un nuevo array los animales que comiencen con esa letra especifica

// entrada: ["oso", "aguila", "alcabaran", "pollo"], "a"
// salida: [ 'aguila', 'alcabaran']

const arrAnimals = (arr, letter) => {
    return arr.filter((item)=>item.charAt(0) === letter)
}

console.log(arrAnimals(["oso", "aguila", "alcabaran", "pollo"], "a"))






