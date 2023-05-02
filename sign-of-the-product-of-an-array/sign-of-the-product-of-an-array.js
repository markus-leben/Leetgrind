/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    var n = 0
    for (let i of nums) {
        if (i === 0) {
            return 0
        } 
        if (i < 0) {
            n += 1
        }
    }
    if (n % 2 === 0) {
        return 1
    } else {
        return -1
    }
};