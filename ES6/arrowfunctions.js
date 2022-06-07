/*

    We often don't need to name our functions, especially when passing a function as an argument to another function. 
    Instead, we create inline functions. 
    We don't need to name these functions because we do not reuse them anywhere else.

*/

function myFunc () {
    console.log("hello")
}

myFunc()

const anyFunc = () => "one-line arrow function"
console.log(anyFunc())

const myGreeting = (msg, name) => {
    return msg + " " + name
}

console.log(myGreeting("Te damos la bienvenida al curso de Javascript,","Pablo"))

// equal operator permits to set a default value for a parameter when the argument its not specified
const functionWithDefaultParameter = (value = 0) => {
    return value
}

console.log(functionWithDefaultParameter())
console.log(functionWithDefaultParameter(8))