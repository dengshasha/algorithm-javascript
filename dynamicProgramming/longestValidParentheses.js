/**
 * @param {string} s
 * @return {number}
 * 方法一：利用栈
 */
var longestValidParentheses = function (s) {
    let stack = [-1];
    let sum = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') stack.push(i)
        else {
            stack.pop()
            if(stack.length) {
                let len = i - stack[stack.length-1]
                sum = Math.max(sum, len)
            } else {
                stack.push(i)
            }
        }
    }
    return sum
};

/**
 * @param {string} s
 * @return {number}
 * 方法二：动态规划
 */
var longestValidParentheses_dp = function (s) {
    
};

//情况1：嵌套的括号
console.log('6:', longestValidParentheses('(()())'))
//情况2：普通的括号
console.log('4:', longestValidParentheses(")()())"))