/**
 * @param {character[][]} board
 * @return {boolean}
 * 数独：9*9方格中包含1-9的数字或者.，.代表无数，不参与判断
 * 满足以下3个条件的为数独：
 * 1. 每一行的数字不能重复
 * 2. 每一列的数字不能重复
 * 3. 每一个3*3的子方格中数字不能重复
 * 注意这里的子方格是指0~2, 3~5, 6~8，不是指0~2,1~3,2~4...这种，即子方格不能交叉。
 */
var isValidSudoku = function(board) {
    let hash = {}
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(board[i][j] === '.') continue;
            let rowKey = `row_${i}_val_${board[i][j]}`
            let colKey = `col_${j}_val_${board[i][j]}`
            // 在同一个子方格中
            let subKey = `row_${Math.floor(i/3)}_col_${Math.floor(j/3)}_val_${board[i][j]}`
            if(hash[rowKey] || hash[colKey] || hash[subKey]) return false;
            hash[rowKey] = 1;
            hash[colKey] = 1;
            hash[subKey] = 1;
        }
    }
    return true;
};

var test1 = [
    [".",".",".",".","5",".",".","1","."],
    [".","4",".","3",".",".",".",".","."],
    [".",".",".",".",".","3",".",".","1"],
    ["8",".",".",".",".",".",".","2","."],
    [".",".","2",".","7",".",".",".","."],
    [".","1","5",".",".",".",".",".","."],
    [".",".",".",".",".","2",".",".","."],
    [".","2",".","9",".",".",".",".","."],
    [".",".","4",".",".",".",".",".","."]]

    // . . . | . 5 . | . 1 .
    // . 4 . | 3 . . | . . .
    // . . . | . . 3 | . . 1


console.log(isValidSudoku(test1))
