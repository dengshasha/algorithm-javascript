/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.data = nums;
    this.original = [].concat(nums)
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let len = this.data.length
    for(let i = 0; i < len; i++) {
        let randomIdx = Math.floor(Math.random() * len)
        let temp = this.data[randomIdx]
        this.data[randomIdx] = this.data[i]
        this.data[i] = temp
    }
    return this.data
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var obj = new Solution([1,2,3])
console.log(obj.shuffle())
console.log(obj.shuffle())
console.log(obj.shuffle())
console.log(obj.shuffle())
