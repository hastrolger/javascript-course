/*

    With the rest parameter, you can create functions that take a variable number of arguments. 
    These arguments are stored in an array that can be accessed later from inside the function.

*/

const restParameter = (...args) => {
  return args.reduce((a,b) => a+b);
};

console.log(restParameter(2, 5, 4, 2));

// spread operator
const arr = [1, 21, 0]
let arr_ = [...arr]
console.log(arr)
arr_[0] =2
console.log(arr_)
console.log(arr)