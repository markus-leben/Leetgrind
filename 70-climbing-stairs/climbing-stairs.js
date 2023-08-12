/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var steps = [1,2]
    while(steps.length < n) {
        steps.push(steps[steps.length-2]+steps[steps.length-1])
    }
    return(steps[n-1])
};