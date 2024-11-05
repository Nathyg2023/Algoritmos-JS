/*Ejercicio 33: ¿Quién se comió la galleta?

Para este problema debes crear un programa que diga quién se comió la última galleta. Si la entrada es una cadena, entonces "Zach" se comió la galleta. Si la entrada es un flotante o un int, entonces "Mónica" se comió la cookie. Si la entrada es otra cosa, "el perro" se comió la galleta. La forma de devolver la declaración es: "¿Quién se comió la última galleta? ¡Era (nombre)!"

Ej: Entrada = "hola" --> Salida = "¿Quién se comió la última galleta? ¡Fue Zach! (La razón por la que devuelves a Zach es porque la entrada es una cadena)

Nota: asegúrese de devolver el mensaje correcto con los espacios y la puntuación correctos.

Por favor, deje comentarios sobre este kata. ¡Salud!*/

const cookie = (x) => {
    if (typeof(x) === "string"){
        return "Who ate the last cookie? It was Zach!"
    }else if (typeof (x) === "number"){
        return "Who ate the last cookie? It was Monica!"
    }else{
        return "Who ate the last cookie? It was the dog!"
    }
}

console.log(cookie("Ryan"))
console.log(cookie(26))
console.log(cookie(2.3))
console.log(cookie(true))

/*Interpretación: utilizo una condicional if donde verifico si X es una cadena de texto, de ser así que me retorne si la galleta fue comida por Zach, luego si la condición anterior no se cumple, verifica si x e de tipo numérico, de ser así me retorna que la galleta fue comida por Mónica  y si ninguna de las anteriores se cumplen, entonces, que me retorne que la galleta fue comida por el perro*/