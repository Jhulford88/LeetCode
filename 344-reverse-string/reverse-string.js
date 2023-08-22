/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let start = 0, end = s.length-1; start < end; start++) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        end--;
    }
    return s;
};