/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var top = 0;
    var bottom = matrix.length;
    var left = 0;
    var right = matrix[0].length;
    var retArr = []

    while (top < bottom && left < right) {
        // right
        for (let i = left; i < right; i++) {
            retArr.push(matrix[top][i])
        }
        top++;
        // down
        for (let i = top; i < bottom; i++) {
            retArr.push(matrix[i][right-1])
        }
        right--;
        if (!(top < bottom && left < right)) {
            break
        }
        // left
        for (let i = right-1; i >= left; i--) {
            retArr.push(matrix[bottom-1][i])
        }
        bottom--
        // up
        for (let i = bottom-1; i >= top; i--) {
            retArr.push(matrix[i][left])
        }
        left++
    }
    return retArr;
};