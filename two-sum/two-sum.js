/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target-nums[i] === nums[i]) {
            var theSlice = nums.slice(i+1)
            console.log(theSlice)
            if (theSlice.includes(target-nums[i])) {
                return([i, i + 1 +theSlice.indexOf(nums[i])])
            }
        }
        else if (nums.includes(target-nums[i])) {
            return([i, nums.indexOf(target-nums[i])])
        }
    }
};