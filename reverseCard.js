function reverseCard (line) {
        let res1 = 0, res2 = 0
        for (let i = 0; i < line.length; i++) {
            if (i % 2 === 0) {
                if (line.charAt(i) === 'W') {
                    res1++
                } else {
                    res2++
                }
            } else {
                if (line.charAt(i) === 'W') {
                    res2++
                } else {
                    res1++
                }
            }
        }
        return Math.min(res1, res2)
    }
