/**
 * leetcode地址：https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 * 思路：初始时，位置0既是买入点，也是卖出点
 * 从位置1开始遍历，只要满足位置i比位置i-1的值大，则将位置i更新成卖出点，买入点不动
 * 若不满足位置i比位置i-1大，则卖出股票，同时更新买入点和卖出点，都为i即可
 * 在最后，由于可能整个数组是递增的，所以需要在循环结束后再计算一次买入点和卖出点的差值
 */
var maxProfit = function(prices) {
    let size = prices.length
    let profit = 0
    let min = 0, max = 0
    for(let i = 1; i < size; i++) {
        if(prices[i] > prices[i-1]) {
            max = i
            continue
        } 
        let sub = prices[max] - prices[min]
        profit += sub
        min = i
        max = i
    }
    let sub = prices[max] - prices[min]
    return profit + sub
};

console.log('11:', maxProfit([2,1,4,5,2,9,7]))
console.log('7:', maxProfit([7,1,5,3,6,4]))
console.log('6:', maxProfit([1,2,3,4,5,1,3]))
console.log('0:', maxProfit([7,6,4,3,1]))
console.log('4:', maxProfit([1,2,3,4,5]))