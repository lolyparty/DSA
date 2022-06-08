/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const repeatedNums = []
    let curIndex = 1
    
     for(let i =0; i < nums.length; i++){
         if(repeatedNums.indexOf(nums[i]) === -1){
             repeatedNums.push(nums[i])
             
         }
     }
    
    nums.splice(0, 0, ...repeatedNums)
    return repeatedNums.length
};