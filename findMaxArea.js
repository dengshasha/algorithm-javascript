    var findMaxArea = function(nums) {
        let maxArea = 0, temp = 0,minValue = 0
        for (let i = 0; i < nums.length; i++) {
            minValue = nums[i]
            maxArea = minValue > maxArea ? minValue : maxArea
            for (let j = i+1; j < nums.length; j++) {
                if (minValue < nums[j]) {
                    temp = minValue * (j-i+1)
                } else {
                    minValue = nums[j]
                    temp = minValue * (j-i+1)
                }
                maxArea = temp > maxArea ? temp : maxArea
            }

        }
        console.log(maxArea)
    }
