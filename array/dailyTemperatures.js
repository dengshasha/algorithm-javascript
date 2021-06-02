/**
 * @param {number[]} temperatures
 * @return {number[]}
 * leetcode地址：https://leetcode-cn.com/problems/daily-temperatures/
 * 方法一：暴力解法
 */
var dailyTemperatures = function(temperatures) {
    let len = temperatures.length
    if(len <= 0) return []
    let res = []
    // 最后一个元素后面一定没有比它大的值
    res[len-1] = 0
    for(let i = len-2; i >= 0; i--) {
        let target = temperatures[i]
        for(let j = i+1; j < len; j++) {
            let current = temperatures[j]
            if(current > target) {
                res[i] = j-i
                break;
            }
        }
        // 这里的意思是该位置后面没有出现过比它大的值
        if(res[i] === undefined) {
            res[i] = 0;
        }
    }
    return res;
};

// 方法二：利用单调栈
var dailyTemperatures_1 = function(temperatures) {
    let len = temperatures.length
    let stack = []
    stack[0] = 0
    let res = []
    for(let i = 1; i < len; i++) {
        while(stack.length && temperatures[stack[stack.length-1]] < temperatures[i]) {
            let j = stack.pop()
            res[j] = i-j
        }
        stack.push(i)
    }
    //最后栈內存在的元素代表的是在该位置后没有比它更大的值，所以都填0
    while(stack.length) {
        res[stack.pop()] = 0
    }
    return res
}

console.log(dailyTemperatures_1([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(dailyTemperatures_1([75, 74]))
console.log(dailyTemperatures_1([75]))