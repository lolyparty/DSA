/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
// one liner
    
    return x.toString() === x.toString().split('').reverse().join('')
};