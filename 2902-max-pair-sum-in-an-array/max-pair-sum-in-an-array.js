/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            if (maxDigit(nums[i]) === maxDigit(nums[j])) {
                max = Math.max(max, nums[i] + nums[j]);
            }
        }
    }
    return max || -1;
};

function maxDigit(n) {
  if (n < 10) return n;
  return Math.max(n % 10, maxDigit(Math.floor(n / 10)));
};