/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let difference = 0;
    let minValue = Math.max(...nums)
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < minValue){
            minValue = nums[i]
        } else if(nums[i] - minValue > difference){
            difference = nums[i] - minValue;
        }
    }
    return !!difference ? difference : -1;
};