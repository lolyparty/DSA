/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    var state = 0;
    const hash = {
        "--X": -1,
        "X--": -1,
        "++X": +1,
        "X++": +1,
    }
    for (var i = 0; i < operations.length; i++){
        state = state + hash[operations[i]]
    }
    return state;
};