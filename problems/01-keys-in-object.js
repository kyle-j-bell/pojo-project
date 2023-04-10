/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/
/*Using 'for...in'*/
/*This function uses a 'for...in' loop to check for keys within an object, pushes those keys to an array, then returns the array after looping through each key.*/
function keysInObject(obj) {
let keysArray = [];
  for (key in obj) {
    keysArray.push(key);
  }
  return keysArray;
}

/*Using 'Object.keys'*/
/*This function just returns all keys within an object using the built-in 'Object.keys' method.*/
function objectAsKeys(obj) {
  return Object.keys(obj);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
