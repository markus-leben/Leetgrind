/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid, position=[0,0]) {
    var previous = [...Array(obstacleGrid.length)].map(e => Array(obstacleGrid[0].length))
    previous[0][0] = 1
    for(let y = 0; y < previous.length; y++) {
        for(let x = 0; x < previous[0].length; x++) {
           if(obstacleGrid[y][x] === 1) {
               previous[y][x] = 0;
               continue;
           }
           if (previous[y][x] === undefined) {
               previous[y][x] = 0;
           }
           if (y > 0) {
               previous[y][x] += previous[y-1][x]
           }
           if (x > 0) {
               previous[y][x] += previous[y][x-1]
           }
        }   
    }

    return previous[previous.length-1][previous[0].length-1]


// 5b5 = 2(4b4) + 2(5b3)

    
};


    // if (obstacleGrid[position[0]][position[1]] !== 0) {
    //     return 0
    // }
    // if (position[0] === obstacleGrid.length-1 && position[1] === obstacleGrid[obstacleGrid.length-1].length-1) {
    //     return 1
    // }
    // var options = 0
    // if (obstacleGrid[position[0]+1] !== undefined) { //down
    //     options += uniquePathsWithObstacles(obstacleGrid, [position[0]+1, position[1]])
    // } 
    // //right
    // options += uniquePathsWithObstacles(obstacleGrid, [position[0], position[1]+1])

    // return options