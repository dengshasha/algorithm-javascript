/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * 方法一：中心扩散查找
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <= 0) return ''
    if(s.length === 1) return s
    if(s.length === 2) return s[0] === s[1] ? s : s[0]
    let maxSubStr = ''
    for(let i = 1; i < s.length-1; i++) {
        let temp = findSubStr(i)
        maxSubStr = temp.length > maxSubStr.length ? temp : maxSubStr
    }
    return maxSubStr;
    function findSubStr(center) {
        let mid = s[center]
        let left = center-1, right = center+1
        while(s[left] === s[center]) {
            mid += s[left]
            left--
        }
        while(s[right] === s[center]) {
            mid += s[right]
            right++
        }
        while(left >=0 && right < s.length) {
            if(s[left] !== s[right]) return mid
            mid = s[left] + mid + s[right]
            left--
            right++
        }
        return mid;
        
    }
};

console.log('should bcdedcb', longestPalindrome("abcdedcb"))