/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var parenDict = {'(':')', '{':'}', '[':']'}
    var brackets = ""
    for (let i of s) {
        if (parenDict.hasOwnProperty(i)) {
            brackets += i
            console.log(brackets[brackets.length-1])
        } else {
            if (i === parenDict[brackets[brackets.length-1]]) {
                brackets = brackets.slice(0, brackets.length-1)
            }
            else {
                return false;
            }
        }
    }
    if (brackets === "") {
        return true;
    }
    return false;
};