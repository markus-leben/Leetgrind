/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var findKthLargest = function(nums, k) {
    let q = new MinPriorityQueue()
    nums.forEach((n) => {
        q.enqueue(n)
        if (q.size() > k) {
            q.dequeue()
        }
        })
    return q.dequeue().element

};