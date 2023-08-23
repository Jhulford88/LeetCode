/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
      let int = BigInt(digits.join("")) + BigInt(1);
      console.log('this is int....', int)
      return int.toString().split("")
};