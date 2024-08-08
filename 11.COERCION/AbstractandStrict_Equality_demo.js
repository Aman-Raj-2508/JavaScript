// Strict Equality

console.log(NaN === NaN);
/**
 * Left is NaN, So false
 */
console.log(10 === 10);
/**
 * Same number value both side,So true
 */
console.log(+0 === -0);
/**Left is +0 and right is -0
 * So return true
 */
console.log(-0 === +0);
/**Left is -0 and right is +0
 * So return true
 */


// console.log({ "a": 10 } === { "a": 10 });
/**
 * returns false because the object are internally treated in different memory,
 * so they are different
 */

//But
x = { "a": 10 };
console.log(x === x);
/**
 * Returns true as the value of objects are stored in a variable and
 * variable === variable is true
 */