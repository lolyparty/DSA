/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    
    var outPut = [];
    
    for (var i = 0; i < boxes.length; i++){
    var moves = 0;
    for (var j = 0; j < boxes.length; j++) {
        if (boxes[j] > 0) {
            moves += Math.abs(i - j) * boxes[j];
        }
    }
    outPut.push(moves);
}
    return outPut;
};