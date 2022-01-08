/**
 * leetcode地址：https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 * 有点无聊，可以不看
 */
var plusOne = function(digits) {
    let i = digits.length-1;
    while (i >= 0) {
        if(digits[i] + 1 < 10) {
            digits[i] += 1;
            break;
        } else {
            digits[i] = 0
            i--;
        }
    }
    if(i < 0) {
        return [1].concat(digits)
    }
    return digits
};

console.log(plusOne([9,9,9]))