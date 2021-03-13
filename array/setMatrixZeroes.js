/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * leetcode地址：https://leetcode.com/problems/set-matrix-zeroes/
 * 题目描述：二维数组中，每项元素是数字，如果数字是0，则其所在行和列都应该是0，返回修正后的二维数组
 */
var setZeroes = function(matrix) {
    for(let i = 0, row = matrix.length; i < row; i++) {
        for(let j = 0, column = matrix[i].length; j < column; j++) {
            if(matrix[i][j] === 0) {
                let _i = 0
                while(_i < row) {
                    if(matrix[_i][j] !== 'T' && matrix[_i][j] !== 0) {
                        matrix[_i][j] = 'T'
                    }
                    _i++
                }
                let _j = 0
                while(_j < column) {
                    if(typeof matrix[i][_j] !== 'T' && matrix[i][_j] !== 0) {
                        matrix[i][_j] = 'T'
                    }
                    _j++
                }
            }
        }
    }
    // console.log(matrix)
    for(let i = 0, row = matrix.length; i < row; i++) {
        for(let j = 0, column = matrix[i].length; j < column; j++) {
            if(matrix[i][j] === 'T')
                matrix[i][j] = 0
        }
    }
    return matrix
}

