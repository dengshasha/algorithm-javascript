    /**
     * @param {string} s
     * @return {number}
     */
    var longestValidParentheses = function (s) {
        res = 0, arr = [], temp = 0
        arr.push(-1)
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) === '(') {
                arr.push(i)
            } else {
                arr.pop()
                if (arr.length) {
                    temp = i - arr[arr.length - 1]
                    res = temp > res ? temp : res
                } else {
                    arr.push(i)
                }
            }
        }
        console.log('res:', res)
    };
