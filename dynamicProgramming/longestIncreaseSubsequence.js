/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let hash = {}
    let temp = Infinity
    let paths = 0
    let dp = []
    nums.forEach((item, index) => {
        if(item < temp) {
            hash[index+1] = item
            temp = item;
        }
    })
    let hashArr = Object.keys(hash)
    // 这是一个递减序列
    if(hashArr.length === nums.length) return 1

    for(let i = 0; i < nums.length; i++) {
        let temp = 0;
    }
    
    return paths
};

// console.log('4:',lengthOfLIS([10,9,2,5,3,7,101,18]))
// console.log('4:',lengthOfLIS([10,9,2,5,3,4,101,18]))
// console.log('4:',lengthOfLIS([0,1,0,3,2,3]))
// console.log('1:', lengthOfLIS([7,7,7,7,7,7,7]))
console.log('6:',lengthOfLIS([5, 7, -24,12,13,2,3,12,5,6,35]))