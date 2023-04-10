/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  /*Creates an empty object.*/
  let strObj = {};
  /*Splits parameter 'string' into an array for looping.*/
  splitStr = string.split("");
  /*This works similarly to the previous problem.  Array.filter can be used to isolate just the current entry within an array, and Array.length can be used to represent its count.*/
  for (let i = 0; i < splitStr.length; i++) {
    let strKey = splitStr[i];
    let filteredArray = splitStr.filter(element => element === strKey);
    /*The character is added to the object as a key and assigned its count as its value.*/
    strObj[strKey] = filteredArray.length;
  }
  /*The completed object is returned.*/
  return strObj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
