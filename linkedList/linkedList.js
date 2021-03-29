class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    has(value) {
        let current = this.head
        while (current !== null && current.value !== value) {
            current = current.next;
        }
        return current !== null
    }
    // 删除某一项
    remove(key) {
        let current = this.head
        let previous = null
        while(current !== null && current.value !== key) {
            previous = current
            current = current.next
        }
        if(current === null) return;
        if(previous === null) {
            //删除头部
            this.size--
            this.head = this.head.next;
            return;
        }
        // 删除中间的节点
        this.size--
        previous.next = current.next
    }
    // 在链表结尾追加一条
    add(value) {
        let node = new LinkedNode(value)
        if(this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while(current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    // 获取链表头部元素
    poll() {
        if(this.head === null) return null
        return this.head.value;
    }
}

function LinkedNode(value='', next=null) {
    this.value = value
    this.next = next
}

let linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(2)
linkedList.add(4)
linkedList.remove(4)
console.log(linkedList.head)
console.log(linkedList.size)