/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newArr = [];
    s = s.split('')
    for(let i = 0; i < s.length; i++){
        if(s[i].toUpperCase() !== s[i].toLowerCase() && s[i] !== ' '){
            newArr.push(s[i].toLowerCase())
        } else if(!isNaN(parseInt(s[i]) && s[i] !== ' ')){
            newArr.push(s[i])
        } 
    }

    return newArr.join('') === newArr.reverse().join('');
};