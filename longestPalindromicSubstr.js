/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * 方法一：中心扩散查找
 * 时间复杂度：O(n^2) 空间复杂度：O(n)
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
        // 这两个while循环的意思是，中心元素可能重复，如果是重复的值，则加入子串中
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

/**
 * 方法二：扩展字符的中心扩散法
 * 时间复杂度：O(n^2) 空间复杂度：O(n)
 * 在字符串中，首尾和每个字符中间增加特殊字符，这样可以不用管中心字符是否重复的问题
 * 性能是比方法一更好的，看起来增长了字符长度，增加了内存使用，实际的内存使用却比方法一要少
 * @param {string} s
 * @return {string}
 */
var longestPalindrome_K = function(s) {
    let newS = '#'
    for(let i = 0; i < s.length; i++) {
        newS += s[i] + '#'
    }
    let palinStart = 0, palinMaxLen = 0;
    for(let i = 1; i < newS.length; i++) {
        createDp(i)
    }
    function createDp(center) {
        let sum = 0;
        let left = center-1, right = center+1
        while(left >=0 && right < newS.length) {
            if(newS[left] !== newS[right]) break;
            sum++
            left--
            right++
        }
        if(sum > palinMaxLen) {
            // 起始位置要和原子串映射
            palinStart = (center - sum) / 2
            palinMaxLen = sum;
        }
    }
    return s.slice(palinStart, palinMaxLen+palinStart)
}

/**
 * 方法三：Manacher算法
 * 性能提升不多，难度提升不少
 * @param {string} s
 * @return {string}
 */
var longestPalindrome_M = function(s) {
    let newS = '#'
    for(let i = 0; i < s.length; i++) {
        newS += s[i] + '#'
    }
    let dp = []
    dp[0] = 0
    let maxRight = 0, center = 0;
    let palinStart = 0, palinMaxLen = 0;
    for(let i = 1; i < newS.length; i++) {
        createDp(i)
    }
    function createDp(i) {
        dp[i] = dp[i] || 0;
        if(i < maxRight) {
            // 这里很难理解
            let mirror = 2 * center - i
            // 正常情况下，中心扩展法，就是从中心，往两边走，走到值不同就停下
            // 这里的意思就是，不一定是从中心往前减一位，往后加一位开始，即跳过该位置去扩散
            dp[i] = Math.min(maxRight-i, dp[mirror])
        }
        // 如果dp[i] = 0, 那么这就是普通的中心扩散
        let left = i-(dp[i]), right = i+(dp[i])
        while(left-- >=0 && right++ < newS.length) {
            if(newS[left] !== newS[right]) break;
            dp[i]++
        }
        if(right-1 > maxRight) {
            maxRight = right-1
            center = i;
        }
        if(dp[i] > palinMaxLen) {
            // 起始位置要和原子串映射
            palinStart = (i - dp[i]) / 2
            palinMaxLen = dp[i];
        }
    }
    return s.slice(palinStart, palinMaxLen+palinStart)
}

console.log('should bcdedcb', longestPalindrome_M("abcdedcb"))
console.log('should cbbc:', longestPalindrome_M('cbbc'))
console.log('should a:', longestPalindrome_M('a'))
console.log('should a:', longestPalindrome_M('ab'))
console.log('should abbacdca:', longestPalindrome_M('abbacdca'))
console.log('should adada:',longestPalindrome_M("babadada"))