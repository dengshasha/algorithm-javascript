/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * leetcode地址：https://leetcode.com/problems/word-break/
 */
var wordBreak = function(s, wordDict) {
    let dp = []
    dp[0] = 1
    let set = new Set(wordDict)
    for(let i = 1, size = s.length; i <= size; i++) {
        for(let j = 0; j < i; j++) {
            if(set.has(s.slice(j, i)) && dp[j]) {
                dp[i] = 1
            }
        }
    }
    return dp[s.length] === 1
};

console.log('false:',wordBreak("catsandog", ["cats","dog","sand","and","cat"]))