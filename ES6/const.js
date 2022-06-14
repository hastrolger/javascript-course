/*

    some developers prefer to assign all their variables using const by default
    and only use let when they will need to reassign the value 

    it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. 

*/

const arr = [5, 6, 7]
arr [0] = 10 // arr will be mutated in its first index 
console.log(arr) 

// prevent mutation using freeze method from object 
const THINGS_TO_SHOP = {
    rice: 2,
    milk: 2
}

Object.freeze(THINGS_TO_SHOP)
THINGS_TO_SHOP['rice'] = 5
console.log(THINGS_TO_SHOP) // the change above does not take effect
