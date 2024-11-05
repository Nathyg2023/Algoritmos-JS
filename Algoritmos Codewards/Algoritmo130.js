//Dada una lista de direcciones para girar, "left" o "right", devuelve un numero entero de cuántas rotaciones completas de 360° se realizaron.Tenga en cuanta que cada palabra de la matriz cuenta como una rotación de 90° en esa dirección.

const angularDirection = (arr) => {
        let l = arr.filter(e => e=='left').length;
        let r = arr.filter(e => e=='right').length;
        return Math.floor(Math.abs(l-r)*0.25);
}

const spinAround = (turns) => {
    let result = 0;
    for (let i = 0; i < turns.length; i++) {
      if (turns[i] === "right") {
        result += 90;
      } else {
        result -= 90;
      }
    }
    return Math.floor(Math.abs(result) / 360);
  }

console.log(angularDirection(['left', 'rigth', 'left', 'right']));
console.log(angularDirection(['left', 'left', 'left', 'left']));
console.log(angularDirection(['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left']));


