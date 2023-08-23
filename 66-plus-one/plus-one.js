/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
      let arr = (BigInt(digits.join("")) + BigInt(1)).toString().split("");
   
      return arr.map(n => n)
};