/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
      if(n <= 0) return false
    if(n > 0 && n < 1) {
        while(n < 1) {
            n = n * 3
        }
        if(n == 1) return true
    }
    while(n > 1) {
        n = n / 3
    }
    if(n == 1) return true
    return false
};