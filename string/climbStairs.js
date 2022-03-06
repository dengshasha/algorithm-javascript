/**
 * @param {number} n
 * @return {number}
 * leetcode address: https://leetcode.com/problems/climbing-stairs/
 */
var climbStairs = function(n) {
    let way = 0;
    let memo = {}
    recursive(n, n)
    function recursive(target, n) {
        if(n < 0) return;
        if(n === 0) {
            way++;
            memo[target] = way;
            return;
        }
        if(memo[n]) {
            way += memo[n]
            memo[target] = way;
            return;
        }
        recursive(n, n-1)
        recursive(n, n-2)
    }
    return way
};

console.log(climbStairs(7))