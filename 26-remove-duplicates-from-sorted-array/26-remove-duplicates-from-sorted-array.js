/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const repeatedNums = []
     for(let i =0; i < nums.length; i++){
         if(repeatedNums.indexOf(nums[i]) === -1){
             repeatedNums.push(nums[i])
         }
     }
    
    nums.unshift(...repeatedNums)
    return repeatedNums.length
};