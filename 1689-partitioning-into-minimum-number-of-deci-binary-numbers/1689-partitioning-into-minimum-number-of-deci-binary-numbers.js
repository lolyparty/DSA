/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    var curhighest = 0;
    for (var i = 0; i < n.length; i++){
        if (parseInt(n[i]) > curhighest){
            curhighest = parseInt(n[i]) 
        }
    }
    return curhighest;
};