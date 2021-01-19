/**
 * 矩阵中的数，每一行是升序排列，每一列也是升序排列，找到矩阵中是否存在给的目标元素
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 方法一：二维二分法
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length <= 0) return false
    let row = matrix.length, column = matrix[0].length
    return findTarget(0, row-1, 0, column-1)
    function findTarget(s1, e1, s2, e2) {
        if(e1 - s1 < 0 || e2 - s2 < 0 || s1 >= row || s2 >= column) return false
        if(matrix[e1][e2] < target || matrix[s1][s2] > target) return false
        let mid1 = Math.floor((e1-s1+1) / 2) + s1
        let mid2 = Math.floor((e2-s2+1) / 2) + s2
        if(matrix[mid1][mid2] === target) return true
        if(matrix[mid1][mid2] > target)
            return findTarget(s1, e1, s2, mid2-1) || findTarget(s1, mid1-1, mid2, e2)
        return findTarget(mid1+1, e1, s2, e2) || findTarget(s1, mid1, mid2+1, e2)
    }
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 方法二：拆解为一维之后，做二分法
 */
var searchMatrix_1 = function(matrix, target) {
    if(matrix.length <= 0) return false
    let column = matrix[0].length
    for(let i = 0; i < matrix.length; i++) {
        let left = 0, right = column
        let arr = matrix[i]
        while(left < right) {
            let mid = Math.floor((right+left)/2)
            if(arr[mid] === target) return true
            if(arr[mid] > target) {
                right = mid
            } else {
                left = mid+1
            }
        }
    }
    return false
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 方法三：简单易懂性能还贼好，你确定你不学习一下？
 */
var searchMatrix_2 = function(matrix, target) {
    if(matrix.length <= 0) return false
    let row =  matrix.length, column =  matrix[0].length
    let r = row-1, c = 0
    while(r >= 0 && c < column) {
        if(matrix[r][c] === target) return true
        if(matrix[r][c] < target) c++
        else r--;
        
    }
    return false
}

console.log(searchMatrix_2([[-1,3]]))
console.log('false', searchMatrix_1([
    [1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]
], 25))

console.log('true', searchMatrix_1([
    [3, 3, 8,13,13,18],
    [4, 5,11,13,18,20],
    [9, 9,14,15,23,23],
    [13,18,22,22,25,27],
    [18,22,23,28,30,33],
    [21,25,28,30,35,35],
    [24,25,33,36,37,40]
], 21))