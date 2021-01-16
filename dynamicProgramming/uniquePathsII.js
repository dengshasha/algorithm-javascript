/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid.length <= 0) return 0
    let dp = []
    let row = obstacleGrid.length, column = obstacleGrid[0].length
    if(obstacleGrid[row-1][column-1] === 1) return 0
    for(let i = 0; i < row; i++) {
        dp[i] = []
    }
    dp[row-1][column-1] = 1
    for(let i = row-2; i >= 0; i--) {
        if(obstacleGrid[i][column-1] === 1) {
            dp[i][column-1] = 0
            continue;
        }
        dp[i][column-1] = dp[i+1][column-1]
    }

    for(let i = column-2; i >= 0; i--) {
        if(obstacleGrid[row-1][i] === 1) {
            dp[row-1][i] = 0
            continue;
        }
        dp[row-1][i] = dp[row-1][i+1]
    }

    for(let i = row-2; i >= 0; i--) {
        for(let j = column-2; j >= 0; j--) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i+1][j] + dp[i][j+1]
        }
    }
    return dp[0][0]
};

console.log(uniquePathsWithObstacles([
    [0,0,0],[0,1,0],[0,0,0]
]))

console.log(uniquePathsWithObstacles(
    [[0,0],[1,1],[0,0]]))