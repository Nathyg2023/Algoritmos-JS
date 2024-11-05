/*Algoritmo 52: Determinar el sexo de la descendencia según los genes de los cromosomas XX y XY.

Los gametos masculinos o espermatozoides en humanos y otros mamíferos son heterogaméticos y contienen uno de dos tipos de cromosomas sexuales. Son X o Y. Sin embargo, los gametos u óvulos femeninos contienen sólo el cromosoma sexual X y son homogaméticos.

El espermatozoide determina en este caso el sexo de un individuo. Si un espermatozoide que contiene un cromosoma X fertiliza un óvulo, el cigoto resultante será XX o femenino. Si el espermatozoide contiene un cromosoma Y, el cigoto resultante será XY o masculino.

Determine si el sexo de la descendencia será masculino o femenino según el cromosoma X o Y presente en el esperma del macho.

Si el espermatozoide contiene el cromosoma X, responda "¡Felicitaciones! Vas a tener una hija."; Si el espermatozoide contiene el cromosoma Y, responda "¡Felicitaciones! Vas a tener un hijo.";*/

const chromosomeCheck = (sperm) => {
    if(sperm == "XY"){
    return "Congratulations! You're going to have a son.";
    }else{
    return "Congratulations! You're going to have a daughter.";
}
}
 
console.log(chromosomeCheck('XY'))
console.log(chromosomeCheck('XX'))