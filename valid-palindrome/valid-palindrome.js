/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var corrected = s.toLowerCase().replaceAll(/[\W_]/g, "")
    for (let i = 0; i < Math.ceil(corrected.length / 2); i++) {
        if (corrected.charAt(i) !== corrected.charAt(corrected.length-1-i)) {
            return false
        }
    }
    return true
};