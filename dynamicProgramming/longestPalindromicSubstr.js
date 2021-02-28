/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * 方法一：中心扩散查找
 * 时间复杂度：O(n^2) 空间复杂度：O(n)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome_1 = function(s) {
    let size = s.length
    if(size <= 1) return s
    if(size === 2) return s[0] === s[1] ? s : s[0]
    let palindromicStr = ''
    for(let i = 1; i < size-1; i++) {
        let left = i-1, right = i+1;
        let temp = s[i]
        // 处理中间元素是偶串的场景
        while(left >= 0 && s[left] === s[i]) {
            temp += s[left]
            left--
        }
        while(right < size && s[right] === s[i]) {
            temp += s[right]
            right++
        }
        // 以该元素为中心，往两边扩散，只要遇到左右对称位置的元素不同，则退出
        while(left >= 0 && right < size) {
            if(s[left] !== s[right]) break;
            temp = s[left] + temp + s[right]
            left--
            right++
        }
        if(temp.length > palindromicStr.length) {
            palindromicStr = temp
        }
    }
    return palindromicStr
};

/**
 * 方法二：扩展字符的中心扩散法
 * 时间复杂度：O(n^2) 空间复杂度：O(n)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome_2 = function(s) {
    let size = s.length
    if(size <= 1) return s
    // 扩展字符
    let str = '#'
    for(let i = 0; i < size; i++) {
        str += s[i] + '#'
    }
    size = str.length
    let min = 0, max = 0
    for(let i = 1; i < size-1; i++) {
        let left = i-1, right = i+1;
        while(left >= 0 && right < size) {
            if(str[left] !== str[right]) break;
            left--
            right++
        }
        if(right-left > max-min) {
            max = right-1
            min = left+1
        }
    }
    // 和原字符中的坐标映射
    min = Math.floor((min)/2)
    max = Math.ceil((max-1)/2)
    return s.slice(min, max)
};

/**
 * 方法三：动态规划
 * 时间复杂度：O(n^2) 空间复杂度：O(n^2)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome_3 = function(s) {
    let dp = [], size = s.length
    let start = 0, end = 0;
    for(let i = 0; i < size; i++) {
        dp[i] = []
    }
    for(let i = 0; i < size; i++) {
        dp[i][i] = true;
    }
    for(let j = 1; j < size; j++) {
        for(let i = 0; i < j; i++) {
            dp[i][j] = j-i === 1 ? s[i] === s[j] : dp[i+1][j-1] && s[i] === s[j]
            if(dp[i][j] && (j-i > end - start)) {
                end = j
                start = i
            }
        }
    }
    return s.slice(start, end+1)
}

/**
 * 方法三：Manacher算法
 * 性能提升不多，难度提升不少
 * @param {string} s
 * @return {string}
 */
var longestPalindrome_M = function(s) {
    let size = s.length
    if(size <= 1) return s
    let str = '#'
    for(let i = 0; i < size; i++) {
        str += s[i] + '#'
    }
    size = str.length
    let dp = []
    dp[0] = 0
    let maxRight = 0, center = 0;
    let palinStart = 0, palinMaxLen = 0;
    for(let i = 1; i < size; i++) {
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
console.log(longestPalindrome_3('aaca'))
// console.log('aca:', longestPalindrome_2("aacabdkacaa"))
// console.log('should bcdedcb', longestPalindrome_M("abcdedcb"))
// console.log('should cbbc:', longestPalindrome_M('cbbc'))
// console.log('should a:', longestPalindrome_M('a'))
// console.log('should a:', longestPalindrome_M('ab'))
// console.log('should abbacdca:', longestPalindrome_M('abbacedcacd'))
// console.log('should adada:',longestPalindrome_M("babadada"))