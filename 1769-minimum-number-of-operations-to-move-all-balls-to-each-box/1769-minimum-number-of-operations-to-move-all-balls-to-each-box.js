/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    
    var outPut = [];
    
    for (var i = 0; i < boxes.length; i++){
        var moves = 0;
        
        if(i > 0){
            for(var j = i - 1; j > -1; j--){
                if(boxes[j] > 0){
                    moves = moves + ((i - j) *  boxes[j])
                }
            }
            for(var j = i + 1; j < boxes.length; j++){
                if(boxes[j] > 0){
                    moves = moves + ((j - i) *  boxes[j])
                }
            }
        } else {
            for(var j = i + 1; j < boxes.length; j++){
                if(boxes[j] > 0){
                    moves = moves + ((j - i) *  boxes[j])
                }
            }
        }       
        outPut.push(moves)
    }
    return outPut;
};