/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let currentSum = 0
    let sum = []
    for(let i = 0; i < nums.length; i++){
        currentSum += nums[i]
        sum.push(currentSum)
    }
    return sum
};
