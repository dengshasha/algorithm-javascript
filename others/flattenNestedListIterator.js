/**
 * Created by dengxuelian on 2022/11/5
 */

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */

class NestedIterator {
    constructor(nestedList) {
        this.data = []
        this.getFlattenArr(nestedList)
    }

    getFlattenArr(data) {
        for(let ele of data) {
            if (ele.isInteger()) this.data.push(ele.getInteger())
            else this.getFlattenArr(ele.getList())
        }
        // if(Array.isArray(data)) {
        //     for(let i = 0; i < data.length; i++) {
        //         this.getFlattenArr(data[i])
        //     }
        // } else {
        //     this.data.push(data)
        // }
    }

    hasNext() {
        return this.data.length > 0
    }

    next() {
        return this.data.shift()
    }
}

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 * nestedList = [1,[4,[6]]], output = [1,4,6]
 */