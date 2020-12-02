/**
 * https://leetcode.com/problems/longest-palindrome/
 * 题目的意思是给一个字符串，用该字符串里面的字符，组成最长的回文字符串，返回回文字符串的长度
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {}
    for(let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1
    }
    let sum = 0
    let odd = 0
    Object.keys(map).map(item => {
        if(map[item] % 2 === 0) {
            sum += map[item]
        } else {
            odd = 1
            sum += map[item] - 1
        }
    })
    return sum+odd
};

console.log(longestPalindrome("abccccdd"))