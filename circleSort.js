    function circleSort (line2) {
        line2.sort(function (a, b) {
            return a - b
        })
        var cirArr = [], mid = Math.floor(line2.length / 2), j = 1
        cirArr[mid] = line2[0]
        for (var i = 1; i < line2.length; i++) {
            cirArr[mid - j] = line2[i]
            if (line2[i + 1]) {
                cirArr[mid + j] = line2[i + 1]
            }
            j++
            i++
        }
        var temp = 0, res = Math.abs(cirArr[cirArr.length - 1] - cirArr[0])
        for (var i = 0; i < cirArr.length - 1; i++) {
            temp = Math.abs(cirArr[i + 1] - cirArr[i])
            res = temp > res ? temp : res
        }
        console.log(res)
    }
