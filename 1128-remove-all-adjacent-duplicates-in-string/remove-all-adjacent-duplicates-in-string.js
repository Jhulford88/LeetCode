/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let queue = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === queue[0]) {
            queue.shift();
        } else {
            queue.unshift(s[i])
        }
    }
    return queue.reverse().join("");
};