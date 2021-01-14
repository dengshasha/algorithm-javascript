/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let abs = Math.abs(nums[i])
        if(abs >= nums.length) continue;
        nums[abs] = nums[abs] * -1
    }
    let index = nums.findIndex(item => {
        //0需要特殊处理
        if(item === 0 && Object.is(item, Math.abs(item))) return true
        return item > 0
    })
    return index > -1 ? index : nums.length
};

console.log('2:',missingNumber([3,0,1]))
console.log('8:',missingNumber([9,6,4,2,3,5,7,0,1]))
console.log('1:', missingNumber([2,0]))