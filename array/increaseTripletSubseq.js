/**
 * @param {number[]} nums
 * @return {boolean}
 * 方法一
 */
var increasingTriplet = function(nums) {
    let size = nums.length
    if(size < 3) return false
    let min = nums[0]
    for(let i = 1; i < size-1; i++) {
        if(nums[i] < min) {
            min = nums[i]
        } else if(nums[i] > min) {
            let max = Math.max(...nums.slice(i))
            if(max > nums[i]) return true
        }
    }
    return false
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * 方法二
 */
var increasingTriplet_1 = function(nums) {
    let min = nums[0], mid = Infinity
    for(let i = 1, size = nums.length; i < size; i++) {
        if(nums[i] > mid) return true
        if(nums[i] > min && nums[i] < mid) mid = nums[i]
        min = Math.min(nums[i], min)
    }
    return false
};

console.log('true:', increasingTriplet_1([2,1,6,0,4,5]))
console.log('false:', increasingTriplet_1([5,4,3,2,1]))
console.log('true:', increasingTriplet_1([1,2,3,4,5]))
console.log('false:', increasingTriplet_1([0,4,2,1,0,-1,-3]))
console.log('true:', increasingTriplet_1([4,5,6,1,2]))
console.log('false:',increasingTriplet_1([1,1,-2,6]))
console.log('false:', increasingTriplet_1([6,7,1,2]))