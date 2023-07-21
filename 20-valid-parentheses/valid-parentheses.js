/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var paren_dict = {'{':'}','[':']','(':')'}
    var stack = [];
    for (let c of s) {
        console.log(c)
        if ('([{'.includes(c)) {
            stack.push(c)
        } else {
            if (paren_dict[stack.pop()] !== c) {
                return false
            }
        }
    }
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
};