/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let currentItems = []
    let newArr = []
    for(let i = 0; i < matrix[0].length; i++){
        for(let j = 0; j < matrix.length; j++){
            currentItems.push(matrix[j][i])
        }
        newArr.push(currentItems)
        currentItems = []
    }

    return newArr
};