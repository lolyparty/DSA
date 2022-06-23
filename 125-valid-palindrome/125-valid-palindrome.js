/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newArr = [];
    s = s.split('')
    for(let i = 0; i < s.length; i++){
        s[i].toUpperCase() !== s[i].toLowerCase() && s[i] !== ' ' ? newArr.push(s[i].toLowerCase()) : !isNaN(parseInt(s[i]) && s[i] !== ' ') ?
                                                                    newArr.push(s[i]) : null;
    }

    return newArr.join('') === newArr.reverse().join('');
};