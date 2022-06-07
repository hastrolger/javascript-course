
// working with objects
const myObj = {
    'name': 'an object',
    utc: 'Spain',
    price: 2.5,
    array: []
}

console.log(myObj.utc) // we can access any property of an object with dot notation
console.log(myObj['price']) // accessing with bracket notation

const newProp = 'country'
myObj[newProp] = 'Spain' // adding a new property to myObj
console.log(myObj)

// working with nested elements in arrays and objects

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1]
  console.log(secondTree)
