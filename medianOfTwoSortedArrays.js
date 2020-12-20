/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 中位数的取值：1. 取自nums1 2. 取自nums2 3.nums1和nums2各取出一个
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = mergeList(nums1, nums2)
    let median = Math.floor(arr.length / 2)
    return arr.length % 2 === 0 ? (arr[median-1] + arr[median]) / 2 : arr[median]
};

function mergeList(nums1, nums2) {
    let arr = []
    let p1 = 0, p2 = 0
    while(p1 < nums1.length && p2 < nums2.length) {
        if(nums1[p1] < nums2[p2]) {
            arr.push(nums1[p1])
            p1++
        } else {
            arr.push(nums2[p2])
            p2++
        }
    }
    while(p1 < nums1.length) {
        arr.push(nums1[p1])
        p1++
    }
    while(p2 < nums2.length) {
        arr.push(nums2[p2])
        p2++
    }
    return arr
}
console.log('6:', findMedianSortedArrays([1,2,5,7,10], [2,9,11]))
console.log('2.5:', findMedianSortedArrays([1,2], [3,4]))
console.log('3.5:', findMedianSortedArrays([1,2], [3,4,5,6]))
console.log('1:', findMedianSortedArrays([1], []))
console.log('2.5:', findMedianSortedArrays([2,3], []))
console.log('-1:', findMedianSortedArrays([3], [-2, -1]))
