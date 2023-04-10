/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

/*This function uses a 'for...in' loop to check for match between the parameter 'key' and the keys within object, obj.  Returns true if there is a match, and false if there is not.*/
function doesKeyExist(obj, key) {
  for (let keyName in obj) {
    let matchCheck = keyName;
    if (matchCheck === key) {
      return true;
    }
  }
  return false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;
