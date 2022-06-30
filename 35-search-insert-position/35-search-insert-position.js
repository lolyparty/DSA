/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target) > -1){
        return nums.indexOf(target)
    } else if(target - nums[nums.length -1] >= 1){
        return nums.length;
    }

    //using binary search for position
    let start = 0;
    let end = nums.length - 1;
    while (start <= end){
        let mid = start + Math.floor((end - start)/2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] > target){
            end = mid - 1;
        } else{
            start = mid + 1;
        }
    }
    return start;
    
};