/**
 * Created by dengxuelian on 2023/3/30
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * leetcode: https://leetcode.com/problems/rotate-image/description/
 * 旋转90度分解为 1. 先上下交换，即第一列和最后一列，第二列和倒数第二列交换
 * 2. 对称交换，坐标(i, j)和(j, i)交换
 * Time complexity O(n^2)
 * Space complexity O(1)
 */
var rotate = function(matrix) {
    const len = matrix.length
    // 行交换 i -> len-(i+1)
    // 由于是上下交换，所以行只能遍历1/2
    for(let i = 0; i < len/2; i++) {
        for(let j = 0; j < len; j++) {
            swap(i, j, len-i-1, j, matrix)
        }
    }
    // 对称交换 (i, j) -> (j, i)
    for(let i = 0; i < len; i++) {
        // 对称交换要注意，所有i=j的数位置不会变，j < i的数在前面的循环中已经完成交换了，不能再次遍历，否则又会回到交换前的位置
        for(let j = i+1; j < len; j++) {
            swap(i, j, j, i, matrix)
        }
    }
    // console.log(matrix)
};

function swap(i1, j1, i2, j2, matrix) {
    let temp = matrix[i1][j1]
    matrix[i1][j1] = matrix[i2][j2]
    matrix[i2][j2] = temp;
}