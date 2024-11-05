//Escriba una función insert_dash(num) / insertDash(num) / InsertDash(int num) 
// que insertará guiones ('-') entre cada dos dígitos impares en num. 
// Por ejemplo: si el número es 454793, la salida debería ser 4547-9-3.

// Tenga en cuenta que el número siempre será no negativo (>= 0).
//Entradas 454793

const insertDash = (num) => {
    
    return num.toString().split('').map((num, index, arr) => {
        if (num % 2 !==0 && arr[index + 1] && arr[index + 1] % 2 !== 0){
            return num + '-';
        } 
        return num;
        }).join('');
}


console.log(insertDash(454793))