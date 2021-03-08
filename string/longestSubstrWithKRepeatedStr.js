/**
 * leetcode地址：https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 方法一：分治法
 * 思路：找出s中不满足重复k次的字符，以该字符位置为分割线，将s分割成s1, s2, 对s1, s2执行同样的操作
 * 如果在子串中找不到不满足条件的，则说明该子串是合法的
 * 取从s1, s2中找到的最大的合法子串
 */
var longestSubstring = function(s, k) {
    return recursive(0, s.length)
    function recursive(start, end) {
        if(end - start < k) return 0;
        let map = {}
        for(let i = start; i < end; i++) {
            map[s[i]] = map[s[i]] || 0
            map[s[i]]++;
        }
        let keyArr = Object.keys(map)
        let invalidChar = keyArr.find(item => map[item] < k)
        if(!invalidChar) return end-start
        let dividerIdx
        for(let i = start; i < end; i++) {
            if(s[i] === invalidChar) {
                dividerIdx = i
            }
        }
        return Math.max(recursive(start, dividerIdx), recursive(dividerIdx+1, end))
    }
}
console.log('3', longestSubstring("aaabb", 3))
// console.log('5:', longestSubstring_1("ababbc", 2))
// console.log('3:',longestSubstring_1("aaacbb", 2))
// console.log('1:',longestSubstring_1("a", 1))
// console.log('0:', longestSubstring_1('ababacb', 3))
// console.log('4:', longestSubstring_1('abcdababc', 2))