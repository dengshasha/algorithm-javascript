/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 方法一：合并两个有序数组，再找新数组的中位数
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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 方法二：查找第K大的数，这里K = Math.floor((nums1.length + nums2.length) / 2)，如果是偶数数组，则中位数是第K-1,和第K个数
 * 使用2个指针，记录指针往前走的步数，当走到第k-1个数时，记录下来，走到第K个数时，退出循环
 */
var findMedianSortedArrays_1 = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    // k表示要查找的第K大的数，这里是中位数
    let k = Math.floor((m + n) / 2);
    // 指针
    let p1 = 0, p2 = 0;
    // 存储中位数
    let k1 = 0, k2 = 0;
    let isEven = (m+n) % 2 === 0
    while(p1 < m && p2 < n) {
        if(p1 + p2 === k) { // 已经查找到了，直接返回中位数的值
            k2 = nums1[p1] <= nums2[p2] ? nums1[p1] : nums2[p2]
            return isEven ? (k1 + k2) / 2 : k2;
        }
        if(p1 + p2 === k-1 && isEven) { //偶数项需要两个中位数
            k1 = nums1[p1] <= nums2[p2] ? nums1[p1] : nums2[p2]
        }
        // 移动指针
        nums1[p1] <= nums2[p2] ? p1++ : p2++
    }
    // 以下是处理其中一个数组已经走完，但还没找到中位数的情况
    if(p1 < m) {
        /**这里有点难理解，举个例子说明吧, nums1 = [3,4] nums2 = [1,2], 那么k = 2, 且现在是偶数数组，则需要两个中位数，
         * 代码已经很明确了，k1存储k-1位置的中位数，k2存储k位置的中位数
         * 现在上面的while循环退出的时候，p1 = 0, k1 = nums2[p2] = 2, p2++ = 2,  k2 = 0(初始值，还未被赋值)
         * 那么k2的可能值是nums1[p1]，注意，这只是可能值，如果此时p1+p2===k, 则k2就表示k位置的中位数，那么中位数查找就完成了。
        */
        k2 = nums1[p1]
        p1++;
        /**
         * 那这个while循环怎么理解呢？现在把上面的例子改成nums1 = [3,4,5,6] nums2 = [1,2], 那么上面的while退出的时候，p1 = 0, k1 = nums2[p2] = 2, k2 = 0, p2++ = 2, 
         * 再加上上面两句代码执行后，p1 = 1, k2 = 3, 但现在p1 + p2 = 3 <= 3, 意思就是还没查找到中位数的位置，为什么是小于等于，因为p2在上面的while循环时多加了一次，
         * 此时要注意了！！现在还没查找到中位数，那么说明中位数一定是出现在nums1中了，而k1是落后K2一位的中位数，所以现在是把之前得到的中位数候选人都向前推进一个，
         * 现在k1 = 3, k2 = 4, p1+p2 = 4 不满足条件，退出循环
         * 这里不能一上来就认为中位数一定会出现在nums1中，像上面的例子，需要再往前推进一个，如果发现还没找到，才能说明中位数会都出现在Num1中。
         */
        while(p1 + p2 <= k) {
            k1 = k2
            k2 = nums1[p1]
            p1++;
        }
    }
    if(p2 < n) {
        k2 = nums2[p2]
        p2++;
        while(p1 + p2 <= k) {
            k1 = k2
            k2 = nums2[p2]
            p2++;
        }
    }
    return isEven ? (k1 + k2) / 2 : k2;  
};
// console.log('should 4:', findMedianSortedArrays_1([1, 2, 7], [4, 5]))
// console.log('should 2:', findMedianSortedArrays_1([1, 2], [3]))
// console.log('should 4::', findMedianSortedArrays_1([1, 3, 5], [2, 6, 7]))
// console.log('should 7.5:', findMedianSortedArrays_1([1,2,5,8,10], [7, 9, 11]))
console.log('should 2.5:', findMedianSortedArrays_1([1,2], [3,4]))
// console.log('should 3.5:', findMedianSortedArrays_1([1,2], [3,4,5,6]))
// console.log('should 1:', findMedianSortedArrays_1([1], []))
// console.log('should 2.5:', findMedianSortedArrays_1([2,3], []))
// console.log('should -1:', findMedianSortedArrays_1([3], [-2, -1]))
