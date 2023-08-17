/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let range = []
    while (n > -1) {
        range.push(n), n--;
        }
    
    return range.reduce((a,b) => a + b) - nums.reduce((a,b) => a + b)

};
