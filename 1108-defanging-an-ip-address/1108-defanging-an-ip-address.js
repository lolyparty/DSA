/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var newArr = [];
    address = address.split('')
    for (var i = 0; i < address.length; i++){
        address[i] === '.' ? newArr.push('[.]') : newArr.push(address[i])
    }
    return newArr.join('');
};