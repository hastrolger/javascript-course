/* 

    The Object RegExp is used to match a text to a pattern 
    Regular Expressions can be created by literal notation or with a constructor

    const regExpLiteralNotation = /ab/i   ---> parameters in literal notation are enclosed in slashes and do not use quotes
    const regExpConstructor =  new RegExp('ab', 'i')    ---> the parameters in the contructor function are not enclosed in slashes but use quotes

*/

const textToMatch = 'hello there!'
const regExp = /^hello/i 

const resultOfMatching = regExp.test(textToMatch)
console.log(resultOfMatching)
