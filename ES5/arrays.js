
// Arrays, store several pieces of data in on varaibale
// Unlike strings, we can change an entry of an array by indexing because they are mutable
const sandwich = ["peanut butter", "jelly", "bread"];
console.log(sandwich[2]);

// Accessing multidimensional arrays
// myArray[1][2] »»» [1] point to the nested array ... [2] point to the desired index
const myArray = [
  [1, 2, 3],
  ["soul", "beer"],
  [1.2, 2.2, 3.2, 4.2],
];

const myData = myArray[2][2];
console.log(myData); // should be 3.2

// push method permits to append a value at the end of an array
sandwich.push("letucce");
console.log(sandwich);

// pop method removes the last value of an array
const poppedSandwich = sandwich.pop();
console.log(poppedSandwich);
console.log(sandwich);

// shift method removes the first item of an array
const shiftedOffFromSandwich = sandwich.shift();
console.log(sandwich);

// unshift method works simirarly to push method adding a new element at the begining of the array instead of at the end
sandwich.unshift("new element");
console.log(sandwich);

// create a shopping list
const myList = [
    ["shoes",154], 
    ["t-shirts",45], 
    ["pants",59], 
    ["underwears",25], 
    ["neckties",8]
];
