/**
 * leetcode地址：https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map_left = {
        '(': 1,
        '[': 2,
        '{': 3,
        
    }
    let map_right = {
        ')': 1,
        ']': 2,
        '}': 3,
    }
    let stack = []
    for(let i = 0; i < s.length; i++) {
        if(map_left[s[i]]) {
            stack.push(s[i])
        } else if(stack.length <= 0) { //栈中没有可以匹配的左括号，则一定是无效的字符串，直接返回
            return false
        } else {
            let v = stack.pop()
            if(map_right[s[i]] !== map_left[v]) return false
        }
    }
    return stack.length === 0
};

console.log('false', isValid('['))
console.log('false', isValid(']'))
console.log('true', isValid('[([])]'))