/**
 * 矩阵中的数，每一行是升序排列，每一列也是升序排列，找到矩阵中是否存在给的目标元素
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length <= 0) return false
    return findTarget(0, matrix.length-1, 0, matrix[0].length-1)
    function findTarget(s1, e1, s2, e2) {
        if(e1 - s1 < 0 || e2 - s2 < 0) return false
        let mid1 = Math.floor((e1-s1+1) / 2) + s1
        let mid2 = Math.floor((e2-s2+1) / 2) + s2
        if(matrix[mid1][mid2] === target) return true
        console.log('当前'+mid1+'列'+mid2+'行的值：', matrix[mid1][mid2])
        if(matrix[mid1][mid2] > target)
            return findTarget(s1, mid1, s2, mid2-1) || findTarget(s1, mid1-1, mid2, e2)
        return findTarget(mid1+1, e1, s2, e2) || findTarget(s1, mid1, mid2+1, e2)
    }
};

// console.log('false', searchMatrix([
//     [1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]
// ], 25))

console.log('true', searchMatrix([[3,3,8,13,13,18],[4,5,11,13,18,20],[9,9,14,15,23,23],[13,18,22,22,25,27],[18,22,23,28,30,33],[21,25,28,30,35,35],[24,25,33,36,37,40]], 21))