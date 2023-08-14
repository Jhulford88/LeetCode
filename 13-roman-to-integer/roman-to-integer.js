/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0
    let hash = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for (let i = 0; i < s.length; i++) {
        let curr = hash[s[i]];
        let next = hash[s[i+1]];
        if (curr < next) {
            res += next - curr;
            i++;
        } else {
            res += curr;
        }
    }
    return res
};