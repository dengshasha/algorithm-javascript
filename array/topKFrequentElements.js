/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 方法一：用对象记录每个数出现的次数，再根据次数大小排序，取前k个数返回
 * 官方的解法一就是这种思路。
 */
var topKFrequent = function(nums, k) {
    let hash = {}
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++
        }
    }
    let arr = Object.keys(hash).sort((a, b) => hash[b] - hash[a]).map(item => Number(item))
    return arr.slice(0, k)
};

/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 方法二：写了半天，还没第一个性能好呢
 * 思路：用对象存储每个值出现的频率
 * arr存储频率最高的前k个数，如果其长度比K小，则直接放入
 * 如果已经达到k个数，则做替换，替换规则是遍历arr，将出现频率最小的值替换
 */
var topKFrequent_1 = function(nums, k) {
    let hash = {}
    let arr = []
    let minCount = Infinity, minIdx = -1
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++
        }
    }
    Object.keys(hash).forEach(key => {
        if(arr.length < k) {
            arr.push(Number(key))
            if(hash[key] < minCount) {
                minCount = hash[key]
                minIdx = arr.length - 1;
            }
            
        } else if(hash[key] > minCount){
            arr[minIdx] = Number(key);
            minCount = hash[key]
            arr.forEach((item,index) => {
                if(hash[item] < minCount) {
                    minCount = hash[item]
                    minIdx = index;
                }
            })
        }
    })
    return arr;
};


console.log('[1,2]:',topKFrequent_1([1,1,2,2,1,3], 2))
console.log('[-3,-4,0,1,4,9]:', topKFrequent_1([6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0],6))