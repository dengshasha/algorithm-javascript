/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * leetcode address: https://leetcode.com/problems/wildcard-matching/
 */
var isMatch = function(s, p) {
    let dp = []
    for(let i = 0; i <= s.length; i++) {
        dp[i] = []
    };
    function recursion(i, j, s, p) {
        if(j >= p.length) return dp[i][j] = i >= s.length;
        if(j === p.length-1 && p[j] === '*') return true;
        // 多个*连在一起的情况
        if(p.length - j >= 2 && p[j] === p[j+1] && p[j] === '*') return recursion(i, j+1);
        if(i === s.length) return false;
        if(dp[i][j] !== undefined) return dp[i][j];
        if(p[j] === '*' && p.length - j > 1) {
            return dp[i][j] = recursion(i, j+1, s, p) || recursion(i+1, j, s, p)
        } else {
            let match = s[i] === p[j] || p[j] === '?'
            return dp[i][j] = match && recursion(i+1, j+1, s, p)
        }
    }
    return recursion(0, 0, s, p)
};
console.log(isMatch("",""))
console.log('false:', isMatch("acdcb", "a*c?b"))

console.log('true:', isMatch("aa", "*"))
console.log('true:', isMatch("abczzzde", "*abc???de*"))
console.log('true:', isMatch("abcabczzzde", "*abc???de*"))
