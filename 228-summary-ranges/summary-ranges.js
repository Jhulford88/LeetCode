/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    let track = 0;
    let i = 0;

    while (track < nums.length) {
        let str = nums[i].toString();
        while (track + 1 < nums.length && nums[track] + 1 == nums[track + 1]) {
            str = nums[i] + "->" + nums[track + 1];
            track++;
        }
        res.push(str);
        track++;
        i = track;
    }
    return res;
};