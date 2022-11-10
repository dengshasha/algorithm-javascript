/**
 * Created by dengxuelian on 2022/11/10
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * leetcode link: https://leetcode.com/problems/gas-station/
 */
var canCompleteCircuit = function(gas, cost) {
    // remain是记录能否完成cycle
    // currentRemain是帮助找到索引
    let remain = 0, currentRemain = 0;
    let index = -1
    // 用于标记已经给index赋值的情况
    let tag = false
    for(let i = 0; i < gas.length; i++) {
        let diff = gas[i] - cost[i]
        remain += diff
        currentRemain += diff;
        // 在currentRemain第一次为正值的地方，是可能满足条件的索引（还要结合remain的值）
        if(currentRemain >= 0 && !tag) {
            index = i;
            tag = true
        } else if(currentRemain < 0) {
            currentRemain = 0;
            tag = false
        }
    }
    return remain >= 0 ? index : -1;
};

console.log('3:', canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))
console.log('-1:', canCompleteCircuit([2,3,4], [3,4,3]))