/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const splittedS = s.split('')
    const stack = []
    const hashParantheses = {
        "}":"{",
        ")":"(",
        "]":"["
    }

    if(splittedS.length % 2 > 0){
        return false
    } else{
        for(let i = 0; i < splittedS.length; i++){
            if(splittedS[i] === "(" || splittedS[i] === "{" || splittedS[i] === "["){
                stack.push(splittedS[i])
            } else if(splittedS[i] === ")" || splittedS[i] === "}" || splittedS[i] === "]"){
                console.log(hashParantheses[splittedS[i]], stack[stack.length - 1])
                if(hashParantheses[splittedS[i]] === stack[stack.length - 1]){
                    // console.log(hashParantheses[splittedS[i]], stack[stack.length - 1])
                    stack.pop()
                } else{
                    return false
                }
            }
        }
        
    }

    if(stack.length === 0 ) {
        return true;
    } else{
        return false
    }
};