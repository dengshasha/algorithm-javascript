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
    let size = nums.length
    if(size <= 1) return nums
    //0, 1边界，和1,2边界
    let range1 = 0, range2 = size-1
    let i = 0
    // range2往后的已经是排好序的，且全部是2，无需再遍历
    while(i <= range2) {
        if(nums[i] === 1) { //如果元素是1，不用扩展或者缩小边界
            i++
            continue;
        }
        if(nums[i] === 0) {
            if(i <= range1) { //这句代码的意思是，可能一开始的某几个元素都是0，这种时候无需交换，直接往前遍历
                i++
            } else {
                // 交换两个数
                nums[i] = nums[range1]
                nums[range1] = 0
            }
            range1++
            continue;
        }
        if(nums[i] === 2) {
            // 交换两个数
            nums[i] = nums[range2]
            nums[range2] = 2
            range2--
            continue;
        }
    }
    return nums
};
// console.log(sortColors([1,2,0]))
// console.log(sortColors([1,0,1]))
// console.log(sortColors([1,2,1]))
console.log(sortColors([2,0,2,1,1,0]))
// console.log(sortColors([2,0,1]))