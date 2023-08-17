/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {


    let unique = Array.from(new Set(nums)).sort((a,b) => a - b);
    if (unique.length < 3) return Math.max(...unique)
    console.log('unique.....',unique)
    return unique[unique.length-3]
};