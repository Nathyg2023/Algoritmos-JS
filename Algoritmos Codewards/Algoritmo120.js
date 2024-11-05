/*regresar el dia:
Complete la función que devuelve el día de la semana según el número ingresado:
1devoluciones"Sunday"
2devoluciones"Monday"
3devoluciones"Tuesday"
4devoluciones"Wednesday"
5devoluciones"Thursday"
6devoluciones"Friday"
7devoluciones"Saturday"
De lo contrario regresa: "Wrong, please enter a number between 1 and 7"*/

const whatday = (numbers) => {
    switch(numbers){
        case 1:
            return "Sunday";
            break;
        case 2:
            return "Monday";
            break;
        case 3:
            return "Tuesday";
            break;
        case 4:
            return "Wednesday";
            break;
        case 5:
            return "Thursday";
            break;
        case 6:
            return "Friday";
            break;
        case 7:
            return "Saturday";
            break;

        default:
              return "Wrong, please enter a number between 1 and 7";
          }
        }

  /*       var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[num - 1] || 'Wrong, please enter a number between 1 and 7'; */
        
console.log(whatday(3)); 
console.log(whatday(5)); 
console.log(whatday(8)); 
   
        
        
        
        
        
        

  