/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let range = [...Array(n+1).keys()]
    // while (n > -1) {
    //     range.push(n), n--;
    // }
    console.log('range............', range)
    // let rangeTotal = range.reduce((acc, val) => {
    //     return acc + val
    // })
    // console.log('range total.......', rangeTotal)

    // let numsTotal = nums.reduce((a, b) => a+b)

    // console.log('numsTotal.......', numsTotal)

    // return rangeTotal - numsTotal;

    return range.reduce((a,b) => a + b) - nums.reduce((a,b) => a + b)

};
    let reducer = (a,b) => a + b