/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
restSum(0); // => 0
***********************************************************************/
/*This function uses rest parameter syntax and Array.forEach to iterate through all parameters and adds them together to get the total sum.*/
function restSum(...otherNums) {
  let sum = 0;
  otherNums.forEach(num => {sum += num; return sum;});
  return sum;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;
