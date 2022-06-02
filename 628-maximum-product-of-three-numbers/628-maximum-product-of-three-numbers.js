/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums = nums.sort((a, b)=>{
        return b - a
    })

    let fromBackproduct = nums[nums.length - 1] * nums[nums.length - 2] * nums[0]

    let fromFrontProduct = nums[0] * nums[1] * nums[2]
    
    if(fromBackproduct > fromFrontProduct){
        return fromBackproduct
    }
    else{
        return fromFrontProduct
    }
};