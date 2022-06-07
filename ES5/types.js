// This is an in-line comment
/* This is a multi-line comment */

// Primitive types
/*
    undefined
    null
    boolean
    string
    symbol
    bigint
    number
    object
*/

// Variables with var keyword
var a; // Declare the variable a
var A; // Variables a and A are not the same... Javascript is case-sensitive
var b = 2; // Initialize the variable b
var c = b;

// The log method is part of the console object
console.log(a); // undefined
console.log(b); // shows 2
console.log(c);

var addition;
addition = b + c;
console.log(addition);

// Rest of a division
var res = 15 % 5;
console.log(res);

// Variables with let keyword
// With var keyword variables can be overriden and it can be a problem in a big codebase
var nameP = "Carlos";
var nameP = "Juan";

// Let keyword solves the problem above
// With let keyword a variable can only be declared once
let nameWithLet = "Maria";
// let nameWithLet = "Jose"

console.log(nameP);
console.log(nameWithLet);

// increase a number by one varNmae++ | decrease a number by one varName--

var increment = 0;
increment++;

console.log(increment);

// compound assignment
// NOTE ::: everything to the right of the equals sign is evaluated first
var total = 15;
total *= 2; // the same as total = total * 2
console.log(total);

