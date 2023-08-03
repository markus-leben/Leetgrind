/**
 * @param {string} digits
 * @return {string[]}
 */

const letterDict = {
    2:'abc',
    3:'def',
    4:'ghi',
    5:'jkl',
    6:'mno',
    7:'pqrs',
    8:'tuv',
    9:'wxyz'
}
var letterCombinations = function(digits) {
    var results = []
    if (digits.length === 0) {
        return results;
    } else if (digits.length === 1) {
        for (let letter of letterDict[digits[0]]) {
            results.push(letter)
        }
    } else {
        for (let letter of letterDict[digits[0]]) {
            for (let outcome of letterCombinations(digits.slice(1))){
                results.push(letter+outcome)
            }
        }
    }
    return results
};