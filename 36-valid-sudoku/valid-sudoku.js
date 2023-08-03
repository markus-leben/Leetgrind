/**
 * @param {character[][]} board
 * @return {boolean}
 */

var check = function(sudokuArray) {
    var seen = {}
    for (let char of sudokuArray) {
        if (char !== '.') {
            if (char in seen) {
                return false;
            } else {
                seen[char] = true;
            }
        }
    }
    return true;
}

// var getCol = function(board) {
//     for 
// }

var isValidSudoku = function(board) {
    for (let row of board) {
        var rowCheck = check(row)
        if (!rowCheck) {
            return false
        }

    }

    for (let i = 0; i < 9; i++) {
        var colCheck = check([
            board[0][i],
            board[1][i],
            board[2][i],
            board[3][i],
            board[4][i],
            board[5][i],
            board[6][i],
            board[7][i],
            board[8][i]
        ])
        if (!colCheck) {
            return false
        }
    }

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            var boxCheck = check([
                board[i][j],
                board[i+1][j],
                board[i+2][j],

                board[i][j+1],
                board[i+1][j+1],
                board[i+2][j+1],
                
                board[i][j+2],
                board[i+1][j+2],
                board[i+2][j+2]
            ])

            if (!boxCheck) {
                return false
            }
        }
    }
    return true;
};