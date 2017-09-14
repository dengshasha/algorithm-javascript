/**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
*/
    var findMedianSortedArrays = function (nums1, nums2) {
        let arr = nums1.concat(nums2)
        let orderArr = quickSort(arr)

        if (orderArr.length % 2 == 0) {
            let mid = Math.floor(orderArr.length / 2)
            return (orderArr[mid] + orderArr[mid - 1]) / 2
        } else {
            let mid = Math.floor(orderArr.length / 2)
            return orderArr[mid]
        }
    };

    function quickSort (arr) {
        if (arr.length <= 1) {
            return arr
        }
        let left = [], right = []
        let midIndex = Math.floor(arr.length / 2)
        let mid = arr.splice(midIndex, 1)[0]

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > mid) {
                right.push(arr[i])
            } else {
                left.push(arr[i])
            }
        }
        return quickSort(left).concat([mid], quickSort(right))
    }
