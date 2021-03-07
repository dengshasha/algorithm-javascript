/**
 * leetcode地址：https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let size = s.length
    if(size <= 1) return size >= k ? size : 0
    let obj = {}
    let start = 0, end = 0;
    for(let i = 0; i < size; i++) {
        obj = {}
        obj[s[i]] = 1
        for(let j = i+1; j < size; j++) {
            obj[s[j]] = obj[s[j]] ? obj[s[j]] + 1 : 1;
            let valid = true
            let arr = Object.keys(obj)
            for(let m = 0; m < arr.length; m++) {
                if(obj[arr[m]] < k) {
                    valid = false
                    break;
                }
            }
            if(valid && (j-i+1 > end - start)) {
                start = i
                end = j+1
            }
        }
    }
    return end - start;
};

console.log('5:', longestSubstring("ababbc", 2))
console.log('3:',longestSubstring("aaacbb", 2))
console.log('1:',longestSubstring("a", 1))
console.log('0:', longestSubstring('ababacb', 3))
console.log('4:', longestSubstring('abcdababc', 2))