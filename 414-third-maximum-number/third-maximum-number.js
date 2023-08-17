/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    return [...new Set(nums)].length < 3 ? [...new Set(nums)].sort((a, b) => b - a)[0] :  [...new Set(nums)].sort((a, b) => b - a)[2];
    // let unique = Array.from(new Set(nums)).sort((a,b) => a - b);
    // if (unique.length < 3) return Math.max(...unique)

    // return unique[unique.length-3]
};