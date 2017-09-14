    /**
     * @param {character[][]} grid
     * @return {number}
     */
    var numIslands = function (grid) {
        let count = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == '1') {
                    count++
                    isClearLands(grid, i, j)
                }
            }
        }
        console.log(count)
        return count
    };

    var isClearLands = function (grid, i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == '0') {
            return
        } 
        grid[i][j] = '0'
        isClearLands(grid, i, j - 1) //左边
        isClearLands(grid, i, j + 1) //右边
        isClearLands(grid, i - 1, j) //上边
        isClearLands(grid, i + 1, j) //下边
        return
    }
