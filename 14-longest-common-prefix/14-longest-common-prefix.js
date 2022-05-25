/**
 * @param {string[]} strs
 * @return {string}
 */
  
var longestCommonPrefix = function(strs) {
    let prefix = ''
        for(j = 0; j < strs[0].length; j++){
                for(i = 0; i < strs.length; i++){
                    if(strs[0][j] !== strs[i][j]){
                        return prefix 
                    }
                }
                prefix = `${prefix}${strs[0][j]}`
        }
    return prefix
};