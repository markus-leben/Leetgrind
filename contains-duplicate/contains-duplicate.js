/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var numObj = {}
    for (let num of nums) {
        if (numObj.hasOwnProperty(num)) {
            return true
        } else {
            numObj[num] = true
        }
    }
    return false
};