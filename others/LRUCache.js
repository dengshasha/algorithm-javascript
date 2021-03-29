function LinkedNode(value='', next=null) {
    this.value = value
    this.next = next
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    // 删除某一项
    remove(key) {
        let current = this.head
        let previous = null
        while(current !== null && current.value !== key) {
            previous = current
            current = current.next
        }
        // 没有找到
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
    // 获取并删除链表头部元素
    poll() {
        if(this.head === null) return null
        let value = this.head.value;
        this.head = this.head.next
        return value;
    }
}

/**
 * @param {number} capacity
 * 方法一：用链表存储优先级，JS本身没有链表结构，自己实现一个链表其实性能是很一般的
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this._cache = new Map()
    this.random = 100
    this._priority = new LinkedList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this._cache.has(key)) {
        this._priority.remove(key)
        this._priority.add(key)
        return this._cache.get(key)
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let size = this._cache.size
    if(this._cache.has(key)) {
        // 已经存在，需要更新值
        this._cache.set(key, value)
        // 更新优先级
        this._priority.remove(key)
        this._priority.add(key)
    } else {
        if(size >= this.capacity) {
            //需要逐出最早被使用的键值
            let latest = this._priority.poll()
            this._cache.delete(latest)
        }
        this._cache.set(key, value)
        this._priority.add(key)
    }
};

/**
 * @param {number} capacity
 * 方法二：用普通对象，这样实现的put并没有达到O(1)
 * 在JS中没有优先级队列，没有优先级字典这样的数据结构，要实现按优先级存取达到O（1）有方法吗？我没找到
 * 如果有人找到了，欢迎告知
 */
class LRUCache_1  {
    constructor(capacity) {
        this.capacity = capacity;
        this._cache = new Map()
        this._random = 100
        this._priority = new Map()
    }
    get(key) {
        if(this._cache.has(key)) {
            this._priority.set(key, this._random++)
            return this._cache.get(key)
        }
        return -1;
    }
    put(key, value) {
        let size = this._cache.size
        if(size >= this.capacity && !this._cache.has(key)) { //需要逐出最早被使用的键值
            let minValue = Infinity, minKey = undefined
            this._priority.forEach((_value, _key) => {
                if(_value < minValue) {
                    minValue = _value
                    minKey = _key
                }
            })
            this._priority.delete(minKey)
            this._cache.delete(minKey)
        }
        this._cache.set(key, value)
        this._priority.set(key, this._random++)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var lruCache = new LRUCache(2)
console.log('-1:', lruCache.get(2))
lruCache.put(2,6)
console.log('-1:', lruCache.get(1))
lruCache.put(1,5)
lruCache.put(1,2)
console.log('2:',lruCache.get(1))
console.log('6:', lruCache.get(2))