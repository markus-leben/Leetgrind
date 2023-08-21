/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let i = 1; i <=(Math.floor(s.length/2)); i++) {
        if (s.length % i !== 0) {
            continue
        }
        if (s.replaceAll(s.slice(0,i),'') === '') {
            return true
        }
    }
    return false
};