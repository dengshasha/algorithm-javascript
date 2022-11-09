/**
 * Created by dengxuelian on 2022/11/8
 */

/**
 * @param {number} numCourses 有向无环图的顶点
 * @param {number[][]} prerequisites 有向无环图的边
 * @return {number[]}
 * leetcode: https://leetcode.com/problems/course-schedule-ii/
 * 入度（In degree）：顶点的入度是指「指向该顶点的边」的数量；（该活动依赖的其它活动数量）
 * 出度（Out degree）：顶点的出度是指该顶点指向其他点的边的数量。（该活动被多少个其它活动依赖）
 */
var findOrder = function(numCourses, prerequisites) {
    // 存放每个课程的依赖课程数量
    let inDegree = new Array(numCourses).fill(0)
    // queue用于存放当前入度为0的课程
    let queue = [], res = []
    for(let [v] of prerequisites) {
        inDegree[v]++;
    }
    // 先找到没有依赖任何课程（入度为0）的课程。
    for(let i = 0; i < inDegree.length; i++) {
        if(inDegree[i] === 0) {
            queue.push(i);
        }
    }
    while(queue.length) {
        let point = queue.pop()
        res.push(point)
        for(let [v, dep] of prerequisites) {
            // 找到当前的课程v依赖这个入度为0的课程point，则当前课程v的入度减1
            // 如果当前课程v的入度也变成了0，说明当前课程没有依赖课程了，所以可以加入队列
            if(dep === point) {
                inDegree[v]--;
                if(inDegree[v] === 0) {
                    queue.push(v)
                }
            }
        }
    }
    return res.length === numCourses ? res : []
};

console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2], [2,3]]))