/**
 * https://leetcode.com/problems/merge-sorted-array/submissions/
 * @param {number[]} nums1
 * @param {number} m(nums1's length)
 * @param {number[]} nums2
 * @param {number} n(nums2's length)
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 思路：从两个数组末尾（nums1的末尾是指有效数的末尾）开始，逐步将较大的值移动到nums1的末尾（m+n）
 */
var merge = function(nums1, m, nums2, n) {
    let last = m + n - 1;
    while(m > 0 && n > 0) {
        if(nums1[m-1] > nums2[n-1]) {
            nums1[last] = nums1[m-1]
            m--;
        } else {
            nums1[last] = nums2[n-1]
            n--;
        }
        last--;
    }
    while(n > 0) {
        nums1[last--] = nums2[n-1]
        n--
    }
};

merge([1,2,0,0], 2, [3, 4], 2)
merge([1,5,0,0], 2, [4, 6], 2)
merge([10,12,0,0], 2, [4, 6], 2)
