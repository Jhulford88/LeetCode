/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
      let int = BigInt(digits.join("")) + BigInt(1);
      return int.toString().split("")
};