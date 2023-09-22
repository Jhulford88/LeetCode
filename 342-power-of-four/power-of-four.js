/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n <= 0) return false;
    return parseInt(n.toString(4).split('').reverse().join('')) === 1;
};