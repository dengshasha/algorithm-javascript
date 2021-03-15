/**
 * leetcode地址：https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 方法一：构建最小堆
 */
var findKthLargest = function(nums, k) {
    const minHeap = new MinHeap()
    let i = -1
    while(i++ < nums.length) {
        if(minHeap.size < k) {
            minHeap.push(nums[i])
        } else if(minHeap.top() < nums[i]) {
            minHeap.pop()
            minHeap.push(nums[i])
        }
    }
    return minHeap.top()
};

class MinHeap {
    constructor() {
        this.root = []
        this.size = 0
    }
    //入堆
    push(val) {
        //先放到数组最后面，更新长度
        this.root[this.size] = val
        this.size++
        // 再尝试将该值往上移动，移动的原则是，其根节点的值比当前值要大
        this.size > 1 && this._up(this.size-1)
    }
    _up(curIdx) {
        let list = this.root
        while(curIdx > 0) {
            // 取根节点
            let rootIdx = Math.floor(curIdx / 2)
            if(list[rootIdx] > list[curIdx]) {
                let temp = list[rootIdx]
                list[rootIdx] = list[curIdx]
                list[curIdx] = temp
                curIdx = rootIdx
            } else {
                break
            }
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
            if(list[curIdx] > list[j]) {
                let temp = list[curIdx]
                list[curIdx] = list[j]
                list[j] = temp
                curIdx = j
            } else {
                break;
            }
        }
    }
    top() {
        return this.root[0]
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
}

console.log(findKthLargest([7,6,5,4,3,2,1],2))
// console.log(findKthLargest([2,1],2))
// console.log(findKthLargest([3,2,1,5,6,4],2))