/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    var count = 0
    for (let i = 0; i < (mat[0].length)/2; i++) {
        if (i === (mat[0].length-1)/2) {
            count += mat[i][i]
        } else {
            count += mat[i][i]
            count += mat[(mat[0].length-1)-i][i]
            count += mat[i][(mat[0].length-1)-i]
            count += mat[(mat[0].length-1)-i][(mat[0].length-1)-i]
        }
    }
    return count

};