/**
 * Created by dengxuelian on 2022/10/31
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a-b)
    nums2.sort((a,b) => a-b)
    let res = [];
    let p1 = 0, p2 = 0
    while(p1 < nums1.length && p2 < nums2.length) {
        if(nums1[p1] === nums2[p2]) {
            res.push(nums1[p1])
            p1++
            p2++
        } else if (nums1[p1] > nums2[p2]) {
            p2++
        } else {
            p1++
        }
    }
    return res
};