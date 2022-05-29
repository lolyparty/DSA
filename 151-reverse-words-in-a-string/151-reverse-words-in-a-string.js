/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const newArr = s.trim().split(' ').reverse()
    let newString = []
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] !== ""){
            newString.push(newArr[i])
        }
    }
    return newString.join(" ")
};