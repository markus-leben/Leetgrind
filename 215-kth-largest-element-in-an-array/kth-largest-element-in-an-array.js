/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var findKthLargest = function(nums, k) {
    let q = new MaxPriorityQueue()
    nums.forEach((n) => q.enqueue(n))

    while(k > 1) {
        q.dequeue()
        k--
    }

    return q.dequeue().element
};