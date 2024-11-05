//1.-Ordenar un array de números de manera ascendente:
const orderArray = (arr) => {
    return arr.sort((a, b) => a - b)
}
console.log(orderArray([4,5,3,2,1]))
//Utilicé el método sort que ordena los elementos de la matriz y me devuelve un arreglo ordenado

//1.1 Ordenar de forma alfabética un array de string:
const orderAlphabet = (arr) => {
    return arr.sort((a, b) => a.localeCompare(b))
}
console.log(orderAlphabet(["hola", "chao", "azul"]))
//Utilicé localecompare que me permite ordenar un arreglo en orden alf

//2.-Comprobar si un numero es primo:

const primeNumbers = (num) => {
    if(num<=1) return false
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0)return false
    }
    return true
}

console.log(primeNumbers(1))
console.log(primeNumbers(2))
console.log(primeNumbers(3))
console.log(primeNumbers(4))
console.log(primeNumbers(5))
console.log(primeNumbers(6))
console.log(primeNumbers(7))
console.log(primeNumbers(8))
console.log(primeNumbers(9))
console.log(primeNumbers(10))
console.log(primeNumbers(11))
console.log(primeNumbers(12))
console.log(primeNumbers(13))
console.log(primeNumbers(17))

//2.1Verificar en un array de números cuales son primos:
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

const primos = numeros.filter((item) => {
        for (let i = 2; i<item; i++){
        if (item % i === 0){
        return false;
        }
    }
    return item !== 1;
});
    
console.log(primos) 
//------------------------------------------------------------------------------------------------
//Verificar en un array de números cuales son primos:
const primeNumbers1 = (arr) => {
    return arr.filter((item) => {
       for (let i = 2; i < item; i++){
        if (item % i === 0)return false;
        }return item !== 1;
    });
}
console.log(primeNumbers1([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))

//3.-Una función que recibe un string y que valide que sea un pangrama 
const validatePangram = (str) => {
    let abc = 27
    let result = str.toUpperCase().replace(/[^A-Z\W]/g)
    return [...new Set(result)].length == abc
}
console.log(validatePangram("El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja"))
//Una función que recibe un string y que valide que sea un pangrama:
const isPangram = (str) => {
    let alphabet = "abcdefghijklmnñopqrstuvwxyz"
    return alphabet.split("").every((item)=>str.includes(item))
}
console.log(isPangram("El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja"))

//Utilicé el sprint para dividir el string en un array de subcadenas, pasarlos a caracteres, luego el every para ver si todos los elementos satisfacen la condicion y por ultimo verifico si item que son los elementos de alphabet están dentro de el string

const isPangram1 = (str) => {
    return [...new Set(str)].length === 27
}
console.log(isPangram1("abcdefghijklmnñcsefvgrreopqrstuvwxyz"))
//utilice el new set para eliminar cualquier caracter duplicado en la cadena

//5.-Una función que reciba un array de objeto, donde cada objeto es un elemento del array, nombre, apellido y id…como segundo parámetro le paso una la id es que la función reciba el array de

const object = [{
    nombre: 'Maria',
    apellido: 'Fernandez',
    id: 25
},
{
    nombre: 'Elena',
    apellido: 'Suarez',
    id: 30
},
{
    nombre: 'Jose',
    apellido: 'Carmona',
    id: 42
}]

const filterEdad = (arr, number)=>{
    return arr.filter((item)=>item.id === number)
}

console.log(filterEdad(object, 30));

const orderEdad = (arr, id) => {
    return arr.sort((a, b) => b.id - a.id)
}

console.log(orderEdad(object, 30));


//6.-Validar un palindromo:
const isPalindrome = (str) => {
    //return str.map((item) => item.split("").reverse().join("")=== item) aqui devuelve true o false 
    return str.filter((item) => item.split("").reverse().join("").toLowerCase() === item.toLowerCase()) 
}
console.log(isPalindrome(["Oso",  "arepera", "lapiz", "anitalavalatina"]))
//Use el split para dividir la cadena en un array de subcadenas, luego el reverse para invertir la posicion de los elementos del array y el join para unir nuevamente los elementos en una cadena

//7.-Recibe este array de numero y verificar cuales son pares e impares y que devuelva los que son pares o los que son impar
const verifyNumbersPair = (arr) => {
    //return arr.filter((item)=>item % 2 === 0) 
    return arr.map((item) => item % 2 === 0 ? `${item} es par` : `${item} es impar`)
}
console.log(verifyNumbersPair([1,2,3,4,5,6,7,8,9,10]))

//8.- Dado un string limpiarlo de números y de signos:
const cleanString = (str) => {
    //return str.replace(/[^a-z]/gi, " ")
    return str.replace(/[0-9\W]/gi, " ")
}
console.log(cleanString("14 Dia de mi .#cumple!"))
//g-> global y la i es insensitive(obvie mayusculas y minusculas)...\W->w en mayuscular son los caracteres

//9.-Devolver todas las vocales de un string:
const cleanVocales = (str) => {
    //return str.replace(/[^a-z]/gi, " ")
    return str.replace(/[^aeiou]/gi, " ")
}
console.log(cleanVocales("Dia de mi cumple"))

const primeNumber = (arr) => {
    return arr.filter((item) => {
        if(item <= 1)return false
        for(let i = 2; i<item; i++){
            if(item % i === 0)return false
        }
        return true
    })
}

console.log(primeNumber([1,2,3,4,5,6,7,8,9,10]))

//Factorial de un número: Escribe un programa que calcule el factorial de un número ingresado por el usuario utilizando un bucle for. EL factorial de un número n se calcula multiplicando todos los números enteros positivos desde a hasta n

const factorialNumber = (num) => {
    let factorialNumber = 1;
    for(let i = 1; i<=num; i++){
        factorialNumber = factorialNumber * i;
    }
    return factorialNumber
}
console.log(factorialNumber(4))
//1*1=1
//1*2=2
//2*3=6
//6*4=24

//dado un array de números seleccionar el número más grander:
const maxNumbers = (arr) => {
    return Math.max(...arr)
}
console.log(maxNumbers([1,2,3,4,5]))

const minNumbers = (arr) => {
    return Math.min(...arr)//Expande y me trae la copia del array
}
console.log(minNumbers([1,2,3,4,5]))

//Sumar los elementos de un arreglo: Pide al usuario un arreglo de números y suma todos sus elementos.
//Ejemplo de entrada: [2, 4, 6, 8]
//Salida esperada: La suma de los elementos es 20

const array = (arr) =>{
    return arr.reduce((acc, item) => acc + item, 0)
}

console.log(array([2, 4, 6, 8]))

//Calcular el factorial de un número
//Planteamiento: Pide al usuario un número y calcula su factorial.
//Ejemplo de entrada: n = 5
//Salida esperada: El factorial de 5 es 120

const factorialNumber4 = (number) => {
    let result = 1
    for(let i = 1; i<=number; i++){
        result = result * i 
    }
    return result
}

console.log(factorialNumber4(4))

//Planteamiento: Pide al usuario la base y la altura de un triángulo y calcula su área.
//Ejemplo de entrada: base = 5, altura = 8
//Salida esperada: El área del triángulo es 20

const areaTriangle = (base, altura) => {
    return (base * altura)/2
}

console.log(areaTriangle(5, 8))

//Recibir un arreglo de letras y Devolver el mismo arreglo sin duplicados
//entrada: ["m", "a", "r", "i", "a"]
//salida: "mri"

const eliminarDuplicados = (arr) => {
    let indicador = arr.filter((valor, indice, arreglo) => arreglo.indexOf(valor) !== indice);
    return arr.filter((item)=> item !== indicador[0])
}
    

console.log(eliminarDuplicados(["m", "a", "r", "i", "a"]))

/* escribe una funcion que tome dos numeros como parametros y devuelva 
la multiplicacion, resta, division, suma
sum : 5   mult : 4   rest: 5    div: 2*/

const operations = (num1, num2) => {
    return `Suma:${num1 + num2}, Resta: ${num1 - num2}, Multiplicacion: ${num1*num2}, Division:${num1 / num2}`
}
console.log(operations(2,2))

//Hacer una funcion que reciba el objeto, que imprima el valor de una propiedad e imprima nueva propiedad
/*{
name:"Oliver",
lastName:"Prada",
email:"oliverprada86@gmail.com"
Av FRancisco Bilbao
}*/

const object1 = {
        name:"Oliver",
        lastName:"Prada",
        email:"oliverprada86@gmail.com"
}

const addProperty = (obj) => {
   obj.addres = "Av FRancisco Bilbao"
   const {name, addres} = obj
    return `${name} ${addres}` 
}

console.log(addProperty(object1))
//------------------------------------------------
const restOperator = (name, lastName, ...info) => {
    let arr = [1,2,3,4]
    const [one, two, ...numbers] = arr
    return info
    }

 restOperator("Oliver", "Prada", "oliverprada86@gmail.com",937814958) 

console.log(restOperator("Oliver", "Prada", "oliverprada86@gmail.com",937814958) );

//-----------------------------------------------------------------------
//Escribe una funcion que reciba como parametro un array de strings y devuelva un nuevo array con todos los string que son palindromos

 const isPalindrome6 = (arr) =>{
    return arr.filter((item)=> item.split("").reverse().join("") === item)
}

console.log(isPalindrome6(["asa","arepera","hola"]))