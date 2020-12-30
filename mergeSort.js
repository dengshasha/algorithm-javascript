// 归并排序
/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {number[]}
 */
function mergeSort(nums, start, end) {
    if (start === undefined) start = 0
    if(end === undefined) end = nums.length;
    if(end - start <= 1) return 
    let mid = Math.ceil((end+start)/2)
    mergeSort(nums, start, mid)
    mergeSort(nums, mid, end)
    merge(nums, start, mid, end)
    return nums
}
function merge(nums, start, mid, end) {
    let leftArr = nums.slice(start, mid), rightArr = nums.slice(mid, end)
    for(let k = start, i = 0, j = 0; k < end; k++) {
        if(i < mid-start && j < end-mid) {
            nums[k] = leftArr[i] < rightArr[j] ? leftArr[i++] : rightArr[j++]
        } else if(i < mid-start) {
            nums[k] = leftArr[i++]
        } else {
            nums[k] = rightArr[j++]
        }
        
    }
}

console.log(mergeSort([6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0]))