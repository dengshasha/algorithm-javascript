/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * @param {number[]} nums
 * @return {number}
 * 方法一：先排序
 */
var findDuplicate = function(nums) {
    nums = nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i+1] === nums[i]) return nums[i]
    }
};

/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * @param {number[]} nums
 * @return {number}
 * 方法二：由于题目给出数组中的数字大小：1 <= nums[i] <= n
 * 所以将每个元素的值作为其新下标，然后将新下标位置的值取相反数，取相反数的目的有两个，新下标位置取绝对值就能得到该位置存放的值
 * 第二个目的就是为了找到重复的那个数，如果下一次遍历到这里，发现变成了负数，就说明有数访问过这个位置，而这个数就是要找的重复的数
 */
var findDuplicate_1 = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[Math.abs(nums[i])] < 0) {
            return Math.abs(nums[i])
        }
        nums[Math.abs(nums[i])] = nums[Math.abs(nums[i])] * -1
    }
};

console.log('should 3:',findDuplicate_1([3,1,3,4,2]))