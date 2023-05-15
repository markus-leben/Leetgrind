/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var getEnd = function(node, length=1) {
//     if (node.next === null) {
//         return {'node':node, 'length':length}
//     }
//     else {
//         return getEnd(node.next, length+1)
//     }
// }

var getFromLeft = function(node, k) {
    if (k === 1) {
        return node
    } else {
        return getFromLeft(node.next, k-1)
    }
}


var swapNodes = function(head, k) {
    var left = getFromLeft(head, k)
    var end = left
    var right = head
    while (end.next !== null) {
        end = end.next
        right = right.next
    }
    var holder = left.val
    left.val = right.val
    right.val = holder
    return head
};

