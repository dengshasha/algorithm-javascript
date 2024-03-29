拓扑排序是针对有向无环图的一种排序方式。

Directed acyclic graph (DAG)，有向无环图。即：

1. 这个图的边必须是有方向的；
2. 图内无环。

这种图叫 AOV (Activity On Vertex) 网络，在这种图里：

- 顶点：表示活动；
- 边：表示活动间的先后关系

所以一个 AOV 网应该是一个 DAG，即有向无环图，否则某些活动会无法进行。
那么所有活动可以排成一个可行线性序列，这个序列就是拓扑序列。

那么这个序列的实际意义是：
按照这个顺序，在每个项目开始时，能够保证它的前驱活动都已完成，从而使整个工程顺利进行。

入度：顶点的入度是指「指向该顶点的边」的数量；
出度：顶点的出度是指该顶点指向其他点的边的数量。

时间复杂度

注意⚠️：对于图的时间复杂度分析一定是两个参数，面试的时候很多同学张口就是 O(n)

对于有 v 个顶点和 e 条边的图来说，

第一步，预处理得到 map 或者 array，需要过一遍所有的边才行，所以是 O(e)；

第二步，把 入度 == 0 的点入队出队的操作是 O(v)，如果是一个 DAG，那所有的点都需要入队出队一次；

第三步，每次执行一个顶点的时候，要把它指向的那条边消除了，这个总共执行 e 次；

总：O(v + e)

空间复杂度

用了一个数组来存所有点的 indegree，之后的 queue 也是最多把所有的点放进去，所以是 O(v).