/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let specialChar = {}
    const splittedS = s.split('')
    let newArr = [] 

    //loop through splittedS, store special character(key) and position(property), separate letters and special characters 
    for(let i = 0; i < splittedS.length; i++){
        if(splittedS[i].toLowerCase() !== splittedS[i].toUpperCase()){
            newArr.push(splittedS[i])
        } else{
            specialChar[splittedS[i]] = i
        }
    }

    newArr = newArr.reverse()
    for(let i = 0; i < splittedS.length; i++){
        if(splittedS[i].toLowerCase() === splittedS[i].toUpperCase()){
            newArr.splice(i, 0, splittedS[i])
        }
    }

    return newArr.join('')
};
