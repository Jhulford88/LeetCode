/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++
        }
    }

    return Object.keys(hash).reduce(function(a, b){ return hash[a] > hash[b] ? a : b });

};