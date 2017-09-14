function repeatStr (str) {
        let arr = str.split(''), res = 0, i = 0
        while (arr[i] === '?') {
            i++
        }
        arr.splice(0, i)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '?') {
                arr[i] = arr[i - 1] === 'A' ? 'B' : 'A'
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                res++
            }
        }
        console.log(res)

    }
