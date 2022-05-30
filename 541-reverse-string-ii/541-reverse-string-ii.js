/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let numberSkip = 2 * k
    let splittedS = s.split(''); 
    let newArr = []
    let tempArr = []

    let answer = ''
    for(let i = 0; i < splittedS.length; i++){
       
       tempArr.push(splittedS[i])
       if((i + 1) % numberSkip === 0 || i === splittedS.length - 1){ 
           newArr.push(tempArr)
           tempArr = []
       }
    }

    for(let j = 0; j < newArr.length; j++){
        answer = `${answer}${newArr[j].splice(0,k).reverse().join('')}${newArr[j].splice(0).join('')}` 
    }

    return answer.trim()
};