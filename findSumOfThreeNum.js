    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    var threeSumClosest = function (nums, target) {
        if (nums.length < 3) {
            return false
        } else if (nums.length == 3) {
            return nums.reduce((sum, value) => {
                return sum + value
            }, 0)
        } else {
            let orderNums = quickSort(nums)
            let temp = 0, close = Number.MAX_VALUE
            let sum = 0
            for (let i = 0; i < orderNums.length - 2; i++) {
                let front = i + 1, high = orderNums.length - 1
                while (front < high) {
                    temp = orderNums[i] + orderNums[front] + orderNums[high]
                    if (temp < target) {
                        if (target - temp < close) {
                            close = target - temp
                            sum = temp
                        }
                        front++
                    } else if (temp > target) {
                        if (temp - target < close) {
                            close = temp - target
                            sum = temp
                        }
                        high--
                    } else {
                        sum = target
                        return sum
                    }
                }
            }
            return sum
        }
    };
