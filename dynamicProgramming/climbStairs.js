/**
 * Created by dengxuelian on 2022/06/03
 */
/**
 * @param {number} n
 * @return {number}
 * leetcode address: https://leetcode.com/problems/climbing-stairs/
 */
var climbStairs = function(n) {
    let dp = [0,1,2]
    if(n <= 2) return dp[n]
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};

console.log(climbStairs(44))