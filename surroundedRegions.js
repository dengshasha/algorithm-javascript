/**
 * https://leetcode.com/problems/surrounded-regions/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 方法一：深度遍历，第一次遍历处理边缘的O，第二次遍历处理中间的O
 */
var solve = function(board) {
    if(board.length <= 2) return board;
    let row = board.length, column = board[0].length
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            if(i === 0 || j === 0 || i === row-1 || j === column - 1) {
                if(board[i][j] === 'O') {
                    union(i, j)
                }
            }
        }
    }
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            if(board[i][j] === 1) {
                board[i][j] = 'O'
            } else if(board[i][j] === 'O') {
                board[i][j] = 'X'
            }
        }
    }
    return board
    function union(i, j) {
        let row = board.length, column = board[0].length
        if(i < 0 || j < 0 || i >= row || j >= column || board[i][j] !== 'O') return;
        board[i][j] = 1;
        union(i-1, j)
        union(i+1, j)
        union(i, j-1)
        union(i, j+1)
    }
};

/**
 * https://leetcode.com/problems/surrounded-regions/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 方法2：并查集
 */
var solve = function(board) {
    if(board.length <= 2) return board;
    let row = board.length, column = board[0].length
    let uf = new UnionFind(row, column)
    
}

function UnionFind(row, column) {
    let i = 0
    this.count = row * column;
    this.parent = []
    this.weight = []
    this.column = column;
    while(i < row) {
        let j = 0
        while(j < column) {
            this.parent[i*column+j] = i*column+j
            this.weight[i*column+j] = 1
            j++;
        }
        i++
    }
}


UnionFind.prototype.find = function(i, j) {
    let parent = this.parent[i*this.column+j]
    while(parent !== i*this.column+j) {
        parent = this.parent[parent]
    }
    return parent;
}

UnionFind.prototype.union = function(i1, j1, i2, j2) {
    // 他们的父节点已经是同一个
    if(this.parent[i1*this.column+j1] === this.parent[i2*this.column+j2]) return;
    let parent1 = this.find(i1, j1)
    let parent2 = this.find(i2, j2) 
    if(this.weight[parent1] > this.weight[parent2]) {
        this.parent[parent1] = parent2
        this.weight[parent2]++
    } else {
        this.parent[parent2] = parent1
        this.weight[parent1]++
    }
    this.count--;
}



console.log(`[X,X, X, X],
[X,X, X, X],
[X,X, X, X],
[X,O, X, X],`,
solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
]))

console.log('[["O","O","O"],["O","O","O"],["O","O","O"]]', solve(
    [["O","O","O"],["O","O","O"],["O","O","O"]]))

console.log(`[
    ["O","X","X","O","X"],
    ["X","X","X","X","O"],
    ["X","X","X","O","X"],
    ["O","X","O","O","O"],
    ["X","X","O","X","O"]
]`, 
solve([["O","X","X","O","X"],["X","O","O","X","O"],["X","O","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]]))