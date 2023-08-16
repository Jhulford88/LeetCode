/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let singles = new Set(nums);
    return singles.size !== nums.length
};