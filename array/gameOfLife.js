/**
 * Created by dengxuelian on 2022/11/6
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let row = board.length, col = board[0].length
    let hash = {}
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            let totalLive = getLive(i, j)
            hash[`${i}+${j}`] = 0
            if(board[i][j] === 0 && totalLive === 3) {
                board[i][j] = 1
                hash[`${i}+${j}`] = -1
            } else if(board[i][j] === 1 && (totalLive < 2 || totalLive > 3)) {
                board[i][j] = 0
                hash[`${i}+${j}`] = 1
            }

        }
    }
    function getLive(i, j) {
        let total = 0
        if (i > 0 && j > 0) {
            total += board[i-1][j-1] + hash[`${i-1}+${j-1}`]
        }
        if (i > 0 && j < col-1) {
            total += board[i-1][j+1] + hash[`${i-1}+${j+1}`]
        }
        if (i > 0) {
            total += board[i-1][j] + hash[`${i-1}+${j}`]
        }
        if (j > 0) {
            total += board[i][j-1] + hash[`${i}+${j-1}`]
        }
        if (j < col-1) {
            total += board[i][j+1]
        }
        if (i < row - 1 && j > 0) {
            total += board[i+1][j-1]
        }
        if (i < row - 1 && j < col - 1) {
            total += board[i+1][j+1]
        }
        if (i < row - 1) {
            total += board[i+1][j]
        }
        return total;
    }
};

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))