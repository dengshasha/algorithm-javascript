/**
 * leetcode地址：https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 * 题目描述：找数组中的两个数，满足：1.差值最大 2.小的元素出现在大的元素前面 3.若找不到一个小的数在大的数前面，则返回0
 */
var maxProfit = function(prices) {
    let size = prices.length
    if(size <= 1) return 0
    let min = 0;
    let profit = 0
    for(let i = 1; i < size; i++) {
        let sub = prices[i] - prices[min]
        if(sub > profit) {
            profit = sub
        } else if(sub < 0) { //min可以向前推进  
            min = i
        }
    }
    return profit
};
console.log('4:', maxProfit([3,2,6,5,0,3]))
console.log('0:', maxProfit([7,6,4,3,1]))
console.log('5:', maxProfit([7,1,5,3,6,4]))
console.log('2:', maxProfit([2,1,2,1,0,1,2]))



