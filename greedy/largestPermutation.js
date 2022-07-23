/**
 * Largest permutation after at most k swaps
 * Given a permutation of first n natural numbers as array and an integer k. Print the lexicographically largest permutation after at most k swaps
 * address: https://www.geeksforgeeks.org/largest-permutation-k-swaps/
 *
 * */

/**
 * @param {array} arr, elements range from 1 to n, and n = arr.length
 * @param {number} k
 * @return {array}
 * */
function largestPermuation(arr, k) {
    let map = {};
    arr.forEach((item, index) => map[item] = index);
    let i = 0;
    // 这里限制了数组里的元素就是数组的长度，且不重复，所以可以知道数组中的最大值就是数组的长度。
    let max = arr.length;
    while(k > 0 && i < arr.length) {
        if(arr[i] !== max) {
            k--;
            swap(arr, i, map[max]);
            swap(map, map[arr[i]], max);
        }
        i++;
        max--;
    }
    return arr;
}

function swap(data, i, j) {
    let temp = data[i]
    data[i] = data[j]
    data[j] = temp;
}

console.log('', largestPermuation([3,2,5,1,6,4], 2));