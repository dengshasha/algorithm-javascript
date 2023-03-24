/**
 * Created by dengxuelian on 2022/06/03
 */
/**
 * @param {number} n
 * @return {number}
 * leetcode address: https://leetcode.com/problems/climbing-stairs/
 * 1. edge case:
 *    n = 1, there is only 1 way to climb to the top
 *    n = 2, there are 2 ways to climb to the top, climb 1 step each time as twice or climb 2 steps.
 * 2. state transition equation:
 *    dp[i] = dp[i-2] + dp[i-1] (i >= 3)
 */
var climbStairs_dfs = function(n) {
    
    let dp = []
    function recursive(k) {

        if(k < 0) return 0;
        if(k === 0) return 1;
        if(dp[k] !== undefined) return dp[k]
        return dp[k] = recursive(k-1) + recursive(k-2)
    }
    return recursive(n)
}
var climbStairs = function(n) {
    let dp = [0,1,2]
    if(n <= 2) return dp[n]
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};

console.log(climbStairs_dfs(4))