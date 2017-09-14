    function findDNA (line) {
        let length = 0, temp = '', reg = /[ATCG]/
        for (let i = 0; i < line.length; i++) {
            if (reg.test(line.charAt(i)) == true) {
                temp += line.charAt(i)
                length = temp.length > length ? temp.length : length
            } else {
                temp = ''
            }
        }
        console.log(length)
    }
