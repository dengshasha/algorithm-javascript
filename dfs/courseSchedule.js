/**
 * leetcode link: https://leetcode.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * Note: 一个课程可以依赖多个课程, 一个课程也可以被多个课程依赖
 */
var canFinish = function(numCourses, prerequisites) {
    // for example: [[2,0],[1,0],[3,1],[3,2],[1,3]]
    // depObj = { 1: [0,3], 2: [0], 3: [1,2] }
    // 创建依赖对象
    let depObj = {}
    for(let i = 0; i < prerequisites.length; i++) {
        let [course, dep] = prerequisites[i]
        if(depObj[course]) {
            depObj[course].push(dep)
        } else  {
            depObj[course] = [dep]
        }
    }

    // 存储能完成的课程列表
    let finishedCourse = {}

    for(let i = 0; i < numCourses; i++) {
        // 以该课程为链表的第一个元素，创建一个新链表
        let hash = {}
        hash[i] = true
        if(!_canFinish(i, hash)) return false;
        finishedCourse[i] = true
    }
    function _canFinish(course, hash) {
        if(!depObj[course]) {
            finishedCourse[course] = true
            return true
        }
        // 对目标课程的每个依赖课程做递归检查
        for(let i = 0; i < depObj[course].length; i++) {
            let dep = depObj[course][i]
            // 依赖课程在可完成课程列表中
            if(finishedCourse[dep]) continue;
            // 出现了循环依赖，该课程不能完成，直接退出
            if(hash[dep]) return false;
            hash[dep] = true
            // 依赖课程不能完成，则退出
            if(!_canFinish(dep, hash)) return false;
        }
        finishedCourse[course] = true
        return true;
    }
    return true;
};

console.log('false:', canFinish(2, [[0,1],[1,0]]))
console.log('false:', canFinish(3, [[1,0], [0, 2],[2,1]]))
console.log('false:', canFinish(4, [[2,0],[1,0],[3,1],[3,2],[1,3]]))
console.log('true:', canFinish(3, [[0,1],[0,2],[1,2]]))
