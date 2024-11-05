/*Algoritmo 56: Bienvenido a la ciudad

Cree un método que tome como entrada un nombre, ciudad y estado para dar la bienvenida a una persona. Tenga en cuenta que nameserá una matriz que constará de uno o más valores que deben unirse con un espacio entre cada uno, y la longitud de la namematriz en los casos de prueba variará.*/

const sayHello = ( name, city, state ) => {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}


console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))
console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'))
console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'))

