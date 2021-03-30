/**
 * leetcode地址：https://leetcode.com/problems/fizz-buzz/
 * @param {number} n
 * @return {string[]}
 * 题目描述：给定一个数字n，返回一个数组，包含数字1-n，不过对于以下几类数字特殊处理：
 * 1. 如果能整除3，则返回‘Fizz’
 * 2. 如果能整除5，则返回‘Buzz’
 * 3. 如果能整除3和5，则返回‘FizzBuzz’
 */
 var fizzBuzz = function(n) {
    let res = []
    for(let i = 1; i <= n; i++) {
        if(i < 3) {
            res.push(i.toString())
            continue;
        }
        if(i === 3) {
            res.push('Fizz')
            continue;
        }
        if(i === 5) {
            res.push('Buzz')
            continue;
        }
        if(i < 5) {
            res.push(i.toString())
            continue;
        }
        let divider1 = i % 3 === 0
        let divider2 = i % 5 === 0
        if(divider1 && divider2) {
            res.push('FizzBuzz')
        } else if(divider1) {
            res.push('Fizz')
        } else if(divider2) {
            res.push('Buzz')
        } else {
            res.push(i.toString())
        }
    }
    return res
};