/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {};

    for (const n in nums1) {
        if (map[nums1[n]] > 0) {
            map[nums1[n]]++;
        } else {
            map[nums1[n]] = 1;
        }
    }

    let res = [];
    for (const n in nums2) {
        if (map[nums2[n]] > 0) {
            res.push(nums2[n]);
            map[nums2[n]]--;
        }
    }
    return res;
};