/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    var count = 0
    for (let i = 0; i < mat[0].length; i++) {
        if (i === (mat[0].length-1)-i) {
            count += mat[i][i]
        } else {
            count += mat[i][i]
            count += mat[(mat[0].length-1)-i][i]
        }
    }
    return count

};