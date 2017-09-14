    function palindromeNum (line) {
        let arrLine = line.split('')
        let strNum = [], total = 1, res = 0
        for (let i = 0; i < arrLine.length; i++) {
            if (arrLine[i] != -1) {
                for (let j = i + 1; j < arrLine.length; j++) {
                    if (arrLine[i] == arrLine[j]) {
                        total++
                        arrLine[j] = -1
                    }
                }
                strNum.push(total)
                total = 1
            }
        }
        for (let i = 0; i < strNum.length; i++) {
            if (strNum[i] % 2 != 0) {
                res++
            }
        }
        console.log(res)
    }
