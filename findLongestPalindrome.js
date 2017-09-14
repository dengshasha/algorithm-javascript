    /**
     * @param {string} s
     * @return {string}
     */
    function longestPalindrome (s) {
        let palindromeStr = "" //返回的最长回文字符串
        let palindromeLen = 0 //回文字符串的长度
        let tempPalindrome = "" //存储当前的回文字符串，判断是否比palindromeStr长，如果是，则将palindromeStr更新。
        for (let i = 0; i < s.length; i++) {
            tempPalindrome = "" //注意当新的一轮循环开始，需要将tempPalindrome 清空
            for (let j = i; j < s.length; j++) {
                tempPalindrome += s.charAt(j)
                if (isPalindrome(tempPalindrome) && tempPalindrome.length > palindromeStr.length) {
                    palindromeStr = tempPalindrome
                }
            }
        }
        return palindromeStr
    }

    function isPalindrome (s) {
        let reverseS = s.split('').reverse().join('')
        return reverseS === s
    }
