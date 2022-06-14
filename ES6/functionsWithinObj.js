// ES5
const myObj = {
    name: 'Taylor',
    sayHello: function() {
        return `Hello, My name is ${this.name}`
    }
}

// ES6
const myObject = {
    name: 'Taylor',
    sayHello() {
        return `Hello, My name is ${this.name}`
    }
}