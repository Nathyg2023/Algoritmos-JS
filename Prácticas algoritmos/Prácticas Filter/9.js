/*9.-*/

const array = (number) => {
    return number.filter((element) => typeof element !== "string")
}

console.log(array(["a", 2, "3", 10, {nombre:"nathy"}, ]))