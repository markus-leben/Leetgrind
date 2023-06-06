/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var chardict = {}
    for (let i of s) {
        if (chardict.hasOwnProperty(i)) {
            chardict[i]++
        } else {
            chardict[i] = 1
        }
    }
    for (let j of t) {
        if (chardict.hasOwnProperty(j)) {
            chardict[j]--
            if (chardict[j] < 0) {
                return false
            }
        } else {
            return false
        }
    }

    for (let key of Object.keys(chardict)){
        if (chardict[key]) {
            return false
        }
    }
    return true
};