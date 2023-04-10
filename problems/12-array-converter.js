/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/
function arrayConverter(array) {
  /*Creates empty object.*/
  let arrayObj = {};
  /*Loops through each entry in the array parameter.*/
  for (let i = 0; i < array.length; i++) {
    /*Creates a key from the array, to be later assigned a value within arrayObj.*/
    let keyFromArray = array[i];
    /*Filters out entries not equal to the current entry, keyFromArray.*/
    let filteredArray = array.filter(element => element === keyFromArray);
    /*keyFromArray is given the length of the filtered array as a value, which represents the count within the array.*/
    arrayObj[keyFromArray] = filteredArray.length;
  }
  /*The whole object is returned.*/
  return arrayObj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
