/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 方法一：找到分割点，将数组分隔成两个有序数组再查找
 */
var search = function(nums, target) {
    let index = nums.findIndex(item => item < nums[0])
    index = index > -1 ? index : nums.length
    let index1 = find(0, index)
    if(index1 > -1) return index1
    return find(index, nums.length)

    function find(start, end) {
        if(end <= start) return nums[start] === target ? start : -1
        let mid = start + Math.floor((end-start) / 2)
        if(nums[mid] === target) return mid
        return nums[mid] > target ? find(start, mid) : find(mid+1, end)
    }
};

// 方法二：以数组中间位置分隔，分情况考察
var search_1 = function(nums, target) {
    let start = 0, end = nums.length
    while(start <= end) {
        if(end - start === 0) return nums[start] === target ? start : -1
        if(end - start === 1) {
            if(nums[start] === target) return start
            return nums[end] === target ? end : -1
        }
        let mid = start + Math.floor((end-start) / 2)
        if(nums[mid] === target) return mid
        //[start, mid]是有序的，[mid, end]是“无序”的
        if(nums[mid] > nums[start]) { 
            if(nums[mid] > target && nums[start] <= target) {
                end = mid-1
            } else {
                start = mid+1
            }
            continue;
        }
        //[start, mid]是无序的，[mid, end]是有序的
        if(nums[mid] > target || nums[start] <= target) {
            end = mid-1
        } else {
            start = mid+1
        }
    }
    return -1
};
// console.log(search_1([3,1],4))
// console.log(search_1([1], 0))
// console.log(search_1([5,1,3],3))
console.log(search_1([7,8,1,2,3,4,5,6],2))

// // 情况1：前半部分有序 && 目标出现在前半段 && 中间值 > 目标值
// console.log('1:', search_1([4,5,6,7,0,1,2], 5))
// // 情况2：前半部分有序 && 目标出现在后半段 && 中间值 > 目标值
// console.log('5:', search_1([4,5,6,7,0,1,2], 1))
// // 情况3：前半部分有序 && 中间值 < 目标值
// console.log('5:', search_1([5,6,7,8,9,10,1,2,3], 10))


// // 情况4：后半部分有序 && 中间值 > 目标值
// console.log('2:', search_1([6,7,0,1,2,4,5], 0))
// // 情况5：后半部分有序 && 中间值 < 目标值 && 目标出现在前半段
// console.log('0:', search_1([6,7,0,1,2,4,5], 6))
// // 情况6：后半部分有序 && 中间值 < 目标值 && 目标出现在后半段
// console.log('5:', search_1([6,7,0,1,2,4,5], 4))