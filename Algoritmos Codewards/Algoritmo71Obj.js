/*Algoritmo 71:

CASO 1: Crear un objeto:

Enunciado: Crea un objeto llamado "persona" con propiedades como nombre, edad y ciudad.
Ejemplo de entrada y salida:*/

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
  };

console.log(persona)

/*CASO 2: Acceder a propiedades:
  
Enunciado: Accede a las propiedades del objeto "persona" y muestra el nombre en la consola.
Ejemplo de entrada y salida:*/

const persona1 = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Barcelona"
}

console.log(persona1.nombre);

/*CASO 3: Agregar una propiedad:

Enunciado: Agrega una propiedad "profesion" al objeto "persona".*/

const persona2 = {
  nombre: "Pedro",
  edad: 35,
  ciudad: "Sevilla"
}

persona2.profesion = "Ingeniero";

console.log(persona2); 

/*CASO 4: Eliminar una propiedad:

Enunciado: Elimina la propiedad "ciudad" del objeto "persona".*/

const persona3 = {
  nombre: "Luisa",
  edad: 28,
  ciudad: "Valencia"
};

delete persona3.ciudad;

console.log(persona3);


/*CASO 5: Iterar sobre propiedades:

Enunciado: Itera sobre las propiedades del objeto "persona" e imprime sus valores en la consola.*/

const persona4 = {
  nombre: "Carlos",
  edad: 40,
  ciudad: "Bilbao"
};

for (const key in persona4) {
  console.log(`${key}: ${persona4[key]}`);
}


/*CASO 6: Copiar un objeto

Enunciado: Crea un nuevo objeto llamado "copiaPersona" que sea una copia del objeto "persona".*/

const persona5 = {
  nombre: "María",
  edad: 33,
  ciudad: "Málaga"
};
const copiaPersona = Object.assign({}, persona5);
console.log(copiaPersona); 

/*CASO 7: Comprobar la existencia de una propiedad:

Enunciado: Verifica si el objeto "persona" tiene la propiedad "profesion" y muestra un mensaje en la consola.*/

const persona6 = {
  nombre: "David",
  edad: 29
};

if ('profesion' in persona6){
  console.log('La propiedad "profesion" existe en el objeto.');
} else {
  console.log('La propiedad "profesion" no existe en el objeto.');
}

/*CASO 8: Calcular el número de propiedades:

Enunciado: Calcula y muestra en la consola el número de propiedades del objeto "persona".*/

const persona7 = {
  nombre: "Laura",
  edad: 26,
  ciudad: "Zaragoza"
};

const numPropiedades = Object.keys(persona7).length;

console.log(numPropiedades)
console.log(`El objeto tiene ${numPropiedades} propiedades.`);

/*CASO 9: Combinar dos objetos:

Enunciado: Crea un nuevo objeto que combine las propiedades de "persona" y "direccion".*/

const persona8 = {
  nombre: "Eduardo",
  edad: 22
};
const direccion = {
  ciudad: "Sevilla",
  calle: "Calle Principal"
};
const perfil = { ...persona8, ...direccion};
console.log(perfil);

/*CASO 10: Encapsulación de datos:

Enunciado: Crea un objeto llamado "cuentaBancaria" con una propiedad privada llamada "saldo" y métodos públicos para depositar y retirar dinero.*/

const cuentaBancaria = {
  _saldo: 1000, // Propiedad privada
  depositar: function(cantidad) {
    if (cantidad > 0) {
      this._saldo += cantidad;
      console.log(`Se depositaron ${cantidad} unidades. Saldo actual: ${this._saldo}`);
    } else {
      console.log('La cantidad debe ser mayor que cero.');
    }
  },
  retirar: function(cantidad) {
    if (cantidad > 0 && cantidad <= this._saldo) {
      this._saldo -= cantidad;
      console.log(`Se retiraron ${cantidad} unidades. Saldo actual: ${this._saldo}`);
    } else {
      console.log('Saldo insuficiente o cantidad no válida.');
    }
  }
};

cuentaBancaria.depositar(500); // Saldo actual: 1500
cuentaBancaria.retirar(200);   // Saldo actual: 1300









  
 