    /*
    * @param {number} v backpack's capacity
    * @param {number} n product's count
    * @param {number[]} weight product's capacity
    * @param {number[]} value product's value
    * @return {void} Do not return anything, modify nums in-place instead.
    */
    var backpack = function(v, n, weight, value) {
        let dp = []
        for (let i = 0; i <= n; i++) {
            dp[i] = new Array()
            for (let j = 0; j <= v; j++) {
                dp[i][j] = 0
            }
        }
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= v; j++) {
                if (j >= weight[i-1]) {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i-1]] + value[i-1])

                } else {
                    dp[i][j] = dp[i-1][j]
                }
                console.log(dp[i][j])
            }

        }

        console.log(dp[n][v])
    }
