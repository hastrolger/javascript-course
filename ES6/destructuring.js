/*

    we can destructuring values directly from an object
    using the new syntax defined in ES6

*/

const myObject = {
    saludo: 'hola',
    nombre: 'carlos'
}

const {saludo, nombre} = myObject
console.log(saludo + ' ' + nombre)

// we also can specify which name to set to the destructed properties
const {saludo: saludar, nombre: nombreUsuraio} = myObject
console.log(saludar + ' ' + nombreUsuraio)