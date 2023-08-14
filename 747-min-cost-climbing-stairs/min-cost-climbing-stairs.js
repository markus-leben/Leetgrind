/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var stepCosts = [cost[0],cost[1]]
    for (let i = 2; i < cost.length; i++) {
        var option1 = stepCosts[stepCosts.length-2] + cost[i]
        var option2 = stepCosts[stepCosts.length-1] + cost[i]
        stepCosts.push(option1 < option2 ? option1 : option2)
    }

    return (stepCosts[stepCosts.length-1] < stepCosts[stepCosts.length-2] ? stepCosts[stepCosts.length-1]: stepCosts[stepCosts.length-2])
};