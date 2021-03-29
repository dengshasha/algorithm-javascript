/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * leetcode地址：https://leetcode.com/problems/word-break/
 * 思路：先将字典按首字母分类，用对象存储，可以以首字母作键值，所有以其开头的子串都存储在Set中（避免重复），从目标字符的第一个位置开始匹配字典，
 * 具体的匹配方式就是，取该位置的字符，判断对象中是否有值，如果有，则遍历对象的值（所有以该字符开头的子串），尝试下一个开头的字符。
 * 注意，用位置比用子字符性能更好。
 * 这个题也可以用动态规划，详情见dynamicProgramming/wordBreak.js
 */
var wordBreak = function(s, wordDict) {
    let charMap = {}
    let memo = {}
    for(let i = 0, size = wordDict.length; i < size; i++) {
        let char = wordDict[i].slice(0,1)
        if(charMap[char] === undefined) {
            charMap[char] = new Set()
        }
        charMap[char].add(wordDict[i])
    }
    return dfs(0)
    function dfs(pos) {
        if(pos > s.length || memo[pos] === 1) return false
        if(pos === s.length) return true
        let char = s[pos]
        if(charMap[char]) {
            for (let value of charMap[char].keys()) {
                let len = value.length
                if(s.slice(pos, pos + len) === value) {
                    if(dfs(pos + len)) return true
                }
            }
        }
        memo[pos] = 1
        return false
    }
};

console.log('false:',wordBreak("catsandog", ["cats","dog","sand","and","cat"]))