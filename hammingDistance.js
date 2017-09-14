 /**
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    var hammingDistance = function (x, y) {
        let xor = (x ^ y).toString(2), res = 0
        for (let i of xor) {
            if (i === '1') res++
        }
        return res
    };
