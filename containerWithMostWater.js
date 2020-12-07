/**
 * https://leetcode.com/problems/container-with-most-water/
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const length = height.length
    if(length <= 1) return 0
    let start = 0, end = length - 1
    let area = 0;
    for(let i = 0; i < length; i++) {
        if(height[i] < height[start]) continue;
        end = length - 1;
        for(let j = length-1; j > i; j--) {
            if(height[j] < height[end]) continue;
            let tempArea = (j-i) * Math.min(height[i], height[j])
            area = Math.max(tempArea, area)
            end = j
        }
        start = i
    }
    return area;
};

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {number[]} height
 * @return {number}
 */
var maxArea_1 = function(height) {
    const length = height.length
    if(length <= 1) return 0
    let start = 0, end = length - 1;
    let area = 0
    while(start < end) {
        area = Math.max((end - start) * Math.min(height[start], height[end]), area)
        if(height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return area
}
console.log('should 49:', maxArea_1([1,8,6,2,5,4,8,3,7]))
console.log('17', maxArea_1([2,3,4,5,18,17,6]))