/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
        let start = 0
        let end = numbers.length -1

        while(numbers[start] + numbers[end] !== target){
            numbers[start] + numbers[end] > target ? end-- : start++;
            }

            return [start + 1, end + 1]
        }