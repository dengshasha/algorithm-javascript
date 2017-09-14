    /**
     * @param {number[]} nums
     * @return {number}
     */
    var rob = function (num) {
        if (num.length == 0) {
            return 0
        }
        else if (num.length == 1) {
            return num[0]
        }
        else if (num.length == 2) {
            return Math.max(num[0], num[1])
        }
        let preSum = 0, curSum = 0, temp = 0
        for (let i = 0; i < num.length; i++) {
            temp = curSum //先将当前的和存起来
            curSum = Math.max(preSum + num[i], curSum)
            preSum = temp
        }
        return curSum
    }
