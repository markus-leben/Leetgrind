/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    var n = false
    for (let i of nums) {
        if (i === 0) {
            return 0
        } 
        if (i < 0) {
            n = !n
        }
    }
    return n? -1 : 1;
    
};