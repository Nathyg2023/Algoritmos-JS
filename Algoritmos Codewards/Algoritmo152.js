//Escribe una función para convertir un nombre en iniciales.
//Este kata toma estrictamente dos palabras con un espacio entre ellas.

//La salida debe ser dos letras mayúsculas con un punto separándolas.
//entrada: "Jose Saavedra"
//salida: J.S

const names = (str) => {
    return str.split(" ").map((item)=> item[0]).join()
}

console.log(names("Jose Saavedra"))