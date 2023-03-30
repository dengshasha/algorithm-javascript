/**
 * Created by dengxuelian on 2023/03/25
 * leetcode link: https://leetcode.com/problems/perfect-squares/description/
 */
/**
 * @param {number} n
 * @return {number}
 * 完美平方数指的是 n = i * i (i >= 1)，比如1, 4, 9, 16...
 * 考虑最多平方数的情况，完美平方数取1时，数值n由n个1组成，以此作为dp的初始值
 * 接着递增增加完美平方数，依次取4,9,16...如果n=k能由更大的完美平方数组成，则更新dp[k]
 * Time complexity: O(n*logn)
 * Space complexity: O(n)
 */
var numSquares = function(n) {
    let dp = []
    // 初始时，integer取1，perfect square = 1, 数值n由n个1组成
    for(let i = 0; i <= n; i++) {
        dp[i] = i
    }
    let count = 2;
    while(count*count <= n) {
        const square = count*count
        for(let i = square; i <= n; i++) {
            // i = (i - square) + square
            // 这里的square 就是 perfect square, 即题目求的“单位1”
            dp[i] = Math.min(dp[i-square]+1, dp[i])
        }
        count++;
    }
    return dp[n]
};

console.log(numSquares(12))