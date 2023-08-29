/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = [];
    let i = 1;
    while (i <= n) {
        if (i % 3 == 0 && i % 5 == 0) {
            res.push('FizzBuzz');
            i++;
        } else if (i % 3 == 0) {
            res.push('Fizz');
            i++;
        } else if (i % 5 == 0) {
            res.push('Buzz');
            i++;
        } else {
            res.push(i.toString());
            i++;
        }
    }
    return res;
};