class MinHeap {
    constructor() {
        this.root = []
        this.size = 0
    }
    //入堆
    push(val) {
        //先放到数组最后面，更新长度
        this.root[this.size++] = val
        // 再尝试将该值往上移动，移动的原则是，其根节点的值比当前值要大
        this.size > 1 && this._up()
    }
    _swap(i, j) {
        let temp = this.root[i]
        this.root[i] = this.root[j]
        this.root[j] = temp
    }
    _up() {
        let curIdx = this.size-1
        let list = this.root
        while(curIdx > 0) {
            // 取根节点
            let rootIdx = Math.floor(curIdx / 2)
            if(list[rootIdx] <= list[curIdx]) break;
            this._swap(rootIdx, curIdx)
            curIdx = rootIdx
        }
    }
    _down() {
        let list = this.root
        let curIdx = 0
        while(curIdx*2+1 < this.size) {
            let j = curIdx*2+1
            if(list[j] > list[j+1]) { //孩子节点中找小的那个去做交换
                j++
            }
            if(list[curIdx] <= list[j]) break;
            this._swap(curIdx, j)
            curIdx = j
        }
    }
    //弹出堆顶元素
    pop() {
        let top = this.root[0]
        this.root[0] = this.root[this.size-1]
        delete this.root[this.size-1]
        this.size--;
        this._down()
        return top;
    }
    //返回堆顶元素
    top() {
        return this.root[0]
    }
}

let test = new BinaryHeap()
test.push(7)
test.push(6)
test.push(3)
test.push(8)
// console.log(test.root)
console.log(test.pop())
console.log(test.root)

//[7,6,5,4,3,2,1]
