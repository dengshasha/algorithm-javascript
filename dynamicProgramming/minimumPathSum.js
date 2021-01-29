/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid.length <= 0) return 0
    let dp = []
    let row = grid.length, column = grid[0].length
    for(let i = 0; i < row; i++) {
        dp[i] = []
    }
    dp[0][0] = grid[0][0]
    for(let i = 1; i < row; i++) {
        dp[i][0] = grid[i][0] + dp[i-1][0]
    }
    for(let i = 1; i < column; i++) {
        dp[0][i] = grid[0][i] + dp[0][i-1]
    }
    for(let i = 1; i < row; i++) {
        for(let j = 1; j < column; j++) {
            dp[i][j] = Math.min(grid[i][j] + dp[i-1][j], grid[i][j] + dp[i][j-1])
        }
    }
    return dp[row-1][column-1]
};

console.log("7:", minPathSum([[1,3,1],[1,5,1],[4,2,1]]))