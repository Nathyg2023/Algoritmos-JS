//1: Días de la semana
//Este algoritmo toma un número del 1 al 7 que representa un día de la semana y muestra el nombre correspondiente del día.
//Entrada: (3), Salida: Miércoles
//Entrada: (8), Salida: Día no válido

const weekDays = (number) => {
    let nameDay = 0;
    switch(number){
        case 1:
            nameDay = "Lunes";
            break;
        case 2:
            nameDay = "Martes";
            break;
        case 3:
            nameDay = "Miercoles";
            break;
        case 4:
            nameDay = "Jueves";
            break;
        case 5:
            nameDay = "Viernes";
            break;
        case 6:
            nameDay = "Sábado";
            break;
        case 7:
            nameDay = "Domingo";
            break;
        default:
            nameDay = "Día no válido"; 
    }
    return nameDay;
}

console.log(weekDays(3));
console.log(weekDays(8))

//2: Calculadora
//Este algoritmo toma dos números y una operación, y realiza la operación deseada utilizando un condicional switch.
//Entrada: (5, 3, "+"), Salida: 8
//Entrada: (5, 3, "-"), Salida: 2
//Entrada: (5, 3, "/"), Salida: 1.66666
//Entrada: (5, 3, "*"), Salida: 15
//Entrada: (5, 3, "%"), Salida: Operación no válida

const calculator = (num1, num2, operation) => {
    let result = 0;
    switch(operation){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Operación no válida"
    }
    return result
}

console.log(calculator(5, 3, "+"))
console.log(calculator(5, 3, "-"))
console.log(calculator(5, 3, "/"))
console.log(calculator(5, 3, "*"))
console.log(calculator(5, 3, "%"))

//Ejemplo 3: Clasificación de productos
//Este algoritmo clasifica productos en una tienda en categorías según su tipo.
//Entrada: ("Ropa") // Salida: "Ropa y accesorios"
//Entrada: ("Hogar") // Salida: "Categoría desconocida"

const classifyProducts = (type) => {
    let category = 0;
    switch(type){
        case "Electrónica":
            category = "Productos electrónicos";
            break;
        case "Ropa":
            category = "Ropa y accesorios";
            break;
        case "Alimentos":
            category = "Productos alimenticios";
            break;
        default:
            category = "Categoría desconocida"
    }
    return category;
}

console.log(classifyProducts("Electrónica"))// Salida:"Productos electrónicos"
console.log(classifyProducts("Alimentos")) // Salida:"Productos alimenticios"
console.log(classifyProducts("Ropa"))// Salida: "Ropa y accesorios"

//4: Traductor de idiomas
//Este algoritmo traduce palabras simples de un idioma a otro.

//Entrada: ("hello", "es")); // Salida: "hola"
//Entrada: ("goodbye", "fr")); // Salida: "au revoir"
//Entrada: ("hi", "de")); // Salida: "Idioma no compatible"

const traducirPalabra = (palabra, idioma) => {
    let traduccion;
    switch (idioma) {
      case "es":
        switch (palabra) {
            case "hello":
                traduccion = "hola";
                break;
            case "goodbye":
                traduccion = "adiós";
                break;
            default:
                traduccion = "Palabra desconocida";
        }
        break;
      case "fr":
        switch (palabra) {
            case "hello":
                traduccion = "bonjour";
                break;
            case "goodbye":
                traduccion = "au revoir";
                break;
            default:
                traduccion = "Mot inconnu";
        }
        break;
        default:
            traduccion = "Idioma no compatible";
    }
    return traduccion;
  }

  console.log(traducirPalabra("hello", "es"));
  console.log(traducirPalabra("goodbye", "fr")); 
  console.log(traducirPalabra("hi", "de")); 
  
