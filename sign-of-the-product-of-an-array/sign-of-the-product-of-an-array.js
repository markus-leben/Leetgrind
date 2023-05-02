/**
 * @param {number[]} nums
 * @return {number}
 */
 
var arraySign = function(a) {
    var n = false
    for (let i of a) {
        if (i === 0) {
            return 0
        } 
        if (i < 0) {
            n = !n
        }
    }
    return n? -1 : 1;
    
};