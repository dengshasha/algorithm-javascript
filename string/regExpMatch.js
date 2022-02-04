/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * leetcode address: https://leetcode.com/problems/regular-expression-matching/
 * Approach 1: Recursion
 */
var isMatch_1 = function(s, p) {
    if(p.length <= 0) return s.length <= 0;
    let match = s.length > 0 && (s[0] === p[0] || p[0] === '.')
    if(p.length >= 2 && p[1] === '*') {
        //由于*代表的是这个字符可以出现0次或者多次，所以p中出现任意字符加*的组合都可以理解为该字符可以不用出现在s中。
        // 可以用例子：'aaa', "ab*a*c*a" 多体会一下这里的逻辑
        return isMatch_1(s, p.substring(2)) || (match && isMatch_1(s.substring(1), p))
    }
    return match && isMatch_1(s.substring(1), p.substring(1))
};
console.log('true:', isMatch_1('aaa', "ab*a*c*a"))

// dynamic programming
var isMatch = function(s, p) {
    let dp = []
    for(let i = 0; i <= s.length; i++) {
        dp[i] = []
    };
    
    function recursion(i, j) {
        if(j >= p.length) return dp[i][j] = i >= s.length;
        if(dp[i][j] !== undefined) return dp[i][j]
        let match = i < s.length && (s[i] === p[j] || p[j] === '.')
        if(p.length - j >= 1 && p[j+1] === '*') {
            return dp[i][j] = recursion(i, j+2) || (match && recursion(i+1, j))
        }
        return dp[i][j] = match && recursion(i+1, j+1)
    }
    return recursion(0, 0)
};

console.log('true:', isMatch('aa', "a*"))
console.log('true:', isMatch('aaa', "ab*a*c*a"))