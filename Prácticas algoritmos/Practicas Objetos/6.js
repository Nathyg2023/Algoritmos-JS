const obj = {
    name: "Nathy",
    age:35,
    email: "nathyyanieris2013@gmail.com",
    estatura: 165,
}

obj.name = "oliver"
obj.andrea = "va hacer 500 algoritmos"
console.log(obj);

console.log(Object.keys(obj))


const market = {
    departamento: "Fruteria",
    categoria:["legumbre", "hortaliza","Frutas"],
    inventario: 
        {categoria:{
            legumbres:["lechuga", "repollo", "coliflor", "brocoli"],
            hortaliza:["espinacas", "apio", "zanahoria"],
            tuberculos: ["papa", "yuca", "remolacha"],
            frutas: ["fresa", "mango", "manzana", "guinda"]
            },
        }
    }

    const marketTwo = {
        legumbres: "lenteja",
        hortaliza: "brocoli",
        frutas: "pera",
        frutoSeco: ["mani", "pasas", "almendra"]
    }

    const mergedMarket = (obj1, obj2) => {
        for( property in obj2){
            obj1.inventario.categoria[property] = [...obj1.inventario?.categoria[property], obj2[property]]            
            console.log(obj1.inventario?.categoria[property])
        }
        console.log(obj2.frutas)
        /* const result = obj1.inventario?.categoria = {...obj1.inventario?.categoria, frutoSeco:obj2.frutoSeco}
        console.log(result) */
    }

    /* const mergedMarket = (obj1, obj2) => {
        for (const property in obj2){
            obj1.inventario.categoria[property] = [...obj2.inventario.categoria[property], obj2[property]]
            console.log(obj2.inventario.categoria[property]);
        }
    } */

    console.log(mergedMarket(market, marketTwo))

