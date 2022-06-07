// working with strings
let m = 'I am a "double quoted" string inside "double quotes"';
var myString = 'Soy una cadena "con comillas"';
var anotherString = 'Soy otra cadena  con comillas "sin barra invertida"';

var firstString = "hola, ";
var secondString = "¿como estas?";
var concatString;

concatString = firstString + secondString;
console.log(concatString);

// get a string length
var lengthOfString = "Obteniendo el tamaño de una cadena";
console.log(lengthOfString.length); // length is a property of a string

var programmingLanguage = "Javascript";
/*
    String: J a v a s c r i p t
    Index:  0 1 2 3 4 5 6 7 8 9
*/

console.log(programmingLanguage[2]);

// The last position of a string is length - 1
console.log(programmingLanguage[programmingLanguage.length - 1]);
