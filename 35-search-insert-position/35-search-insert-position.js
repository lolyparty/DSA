/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target) > -1){
        return nums.indexOf(target)
    } else if(target - nums[nums.length - 1] >= 1){
        return nums.length
    }
    
    for(let i = 0; i < nums.length; i++){
        if((target - nums[i]) <= 0){
            return i
        }
    }
    
    
};