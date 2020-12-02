/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <= 0) return ''
    if(s.length === 1) return s
    let longestS = ''
    let dp = []
    dp[0] = 1
    for(let i = 1; i < s.length; i++) {

    }
};

console.log('should bcdedcb', longestPalindrome("abcdedcb"))