/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/
/*Using 'for...in'*/
/*Similar to the previous problem, this function loops through each key in an object, assigns its value to 'value', then pushes it to an array for return at the end of the loop.*/
function valuesInObject(obj) {
let valuesArray = [];
  for (key in obj) {
    let value = obj[key];
    valuesArray.push(value);
  }
  return valuesArray;
}

/*Using 'Object.values'*/
/*Again, this is a solution using a built-in method.*/
function objectAsValues(obj) {
  return Object.values(obj);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
