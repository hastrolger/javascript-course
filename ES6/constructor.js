// ES6
class Person {
    constructor(name, age) {
        this._name = name
        this._age = age // _ the underscore is a convention for private variables though it does not make it private
    }

    get name () {
        return this._name
    }

    set name(name) {
        this._name = name
    }

    get age(){
        return this._age
    }

    set age(age) {
        this._age = age
    }
}

const myPerson = new Person("Holger", 25)
console.log(myPerson)
