/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    var count = 0
    var len = mat[0].length
    for (let i = 0; i < (len)/2; i++) {
        if (i === (len-1)/2) {
            count += mat[i][i]
        } else {
            count += mat[i][i]
            count += mat[(len-1)-i][i]
            count += mat[i][(len-1)-i]
            count += mat[(len-1)-i][(len-1)-i]
        }
    }
    return count

};