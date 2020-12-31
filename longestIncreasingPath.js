/**
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 * @param {number[][]} matrix
 * @return {number}
 * 任何一个位置都可以作为路径出发点
 * 任何一个位置只能向上下左右4个方向前进
 * 任何一个位置在一次路径过程中，只能被使用一次
 */
var longestIncreasingPath = function(matrix) {
    let history = []
    for(let i = 0; i < matrix.length; i++) {
        history[i] = []
    }
    let maxStep = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            let path = backTrack(-1, i, j, 0)
            maxStep = Math.max(path, maxStep)
        }
    }
    return maxStep
    function backTrack(target, row, column, step) {
        if(row < 0 || column < 0 || row >= matrix.length || column >= matrix[row].length) return 0;
        if(matrix[row][column] <= target) return 0;
        if(history[row][column]) return history[row][column]
        target = matrix[row][column]
        let path1 = backTrack(target, row+1, column, step+1)
        let path2 = backTrack(target, row-1, column, step+1)
        let path3 = backTrack(target, row, column+1, step+1)
        let path4 = backTrack(target, row, column-1, step+1)
        let max = Math.max(path1, path2, path3, path4)
        history[row][column] = max + 1
        return max+1
    }
};

// console.log('should 1:',longestIncreasingPath(
//     [[1]] 
// ))

// console.log('should 4:',longestIncreasingPath(
//     [
//         [9,9,4],
//         [6,6,8],
//         [2,1,1]
//       ] 
// ))

console.log('should 7:',longestIncreasingPath(
    [
        [7,6,1,1],
        [2,7,6,0],
        [1,3,5,1],
        [6,6,3,2]]
))