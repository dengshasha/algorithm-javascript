/**
 * leetcode address: https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    if(height.length <= 1) return 0;
    let areaRes = 0
    let left = 0, right = height.length - 1
    
    while(left < right) {
        let area = Math.min(height[left], height[right]) * (right - left)
        areaRes = Math.max(areaRes, area)
        if(height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return areaRes
}

console.log(maxArea([2,3,4,5,18,17,6]))

console.log('1:', maxArea([1,8]))
console.log('6:', maxArea([1,8,6]))
console.log('6:', maxArea([1,8,6,2]))
console.log('15:', maxArea([1,8,6,2,5]))
console.log('16:', maxArea([1,8,6,2,5,4]))
console.log('40:', maxArea([1,8,6,2,5,4,8]))
console.log('40:', maxArea([1,8,6,2,5,4,8,3]))
console.log('49:', maxArea([1,8,6,2,5,4,8,3,7]))