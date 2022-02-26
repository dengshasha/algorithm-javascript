/**
 * leetcode地址：https://leetcode.com/problems/sort-colors/
 * 浦发银行笔试题
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 思路：声明两个变量range1, range2分别表示已经数字0和1的边界位置，1和2的边界位置
 * 即，在[0,range1)范围内全是0，(range2, size)范围内全是2，[range1, range2]范围内全是1
 * 在遍历过程中，只要将0，1，2放入对应的范围内即可
 */

var sortColors = function(nums) {
    let left = 0, right = nums.length -1
    let i = 0;
    while(i <= right) {
        if(nums[i] === 0) {
            swap(i, left, nums);
            //放0的子数组扩大了
            left++;
            //注意i的活动范围，应该是从left边界到right边界
            i = left;
            continue;
        }
        if(nums[i] === 2) {
            swap(i, right, nums);
            //放2的子数组扩大了
            right--;
            continue;
        }
        if(nums[i] === 1) {
            i++;
            continue
        }
    }
    return nums;
};

function swap(i, j, arr) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
}
console.log(sortColors([1,2,0]))
console.log(sortColors([1,0,1]))
console.log(sortColors([1,2,1]))
console.log(sortColors([2,0,2,1,1,0]))
console.log(sortColors([2,0,1]))