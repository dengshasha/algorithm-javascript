    /**
     * @param {number[]} nums
     * @return {number}
    方法1：
     */
    var majorityElement1 = function (nums) {
        let major = nums[0], count = 1
        for (let i = 1; i < nums.length; i++) {
            if (count === 0) {
                count++
                major = nums[i]
            } else if (major === nums[i]) {
                count++
            } else {
                count--
            }
        }
        return major
    };
    
    //方法2：
    var majorityElement1 = function (nums) {
        let max = 0, res
        for (let i = 0; i < nums.length; i++) {
            let count = 0
            if (nums[i] != 'a') {
                let temp = nums[i]
                for (let j = i; j < nums.length; j++) {
                    if (nums[j] === temp) {
                        count ++
                        nums[j] = 'a'
                    }
                }

                if (count > max) {
                    max = count
                    res = temp
                }
            }
        }
        let halfLen = Math.floor(nums.length / 2)
        if (max >= halfLen) {
            return res
        }
        return null
    };
