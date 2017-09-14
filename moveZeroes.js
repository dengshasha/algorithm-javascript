    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     方法1：
     */
    var moveZeroes1 = function(nums) {
        let notZeroLen = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[notZeroLen++] = nums[i]
            }
        }
        for (let i = notZeroLen; i < nums.length; i++) {
            nums[i] = 0
        }
        console.log(nums)
    };
    
    //方法2：
    var moveZeroes2 = function(nums) {
            let temp;
        for (let i = 0; i < nums.length-1; i++) {
        	for (let j = i+1; j < nums.length; j++) {
				if (nums[i] === 0) {
				    temp = nums[i]
				    nums[i] = nums[j]
				    nums[j] = temp
				}
        	}
            
        }
        console.log(nums)
    }
