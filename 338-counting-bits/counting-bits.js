/**
 * @param {number} n
 * @return {number[]}
 */

let onesCounter = (i) => {
    if (i == 0) return 0;

    if (i % 2 == 1) {
        return 1 + onesCounter(Math.floor(i/2));
    } else {
        return onesCounter(i/2);
    }
}

var countBits = function(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(onesCounter(i))
    }
    
    return arr;
};