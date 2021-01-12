// 字节跳动面试题，被问了2次了
const array = [
    {"id":1,"name":"第一级1","pid":0},
    {"id":0,"name":"根节点"},
    {"id":3,"name":"第二级1","pid":1},
    {"id":2,"name":"第一级2","pid":0}
];

const res = {
    id: 0,
    name: '根节点',
    children: [
    {
        id: 1,
        name: '第一级1',
        children: [
        {
            id: 3,
            name: '第二级1'
        }]
    }, 
    {
        id: 2,
        name: '第一级2'
    }]
}

// 只会有1个根节点
function convertArrToTree(arr) {
    let res = {}
	const convertObj = arr.reduce((acc, curValue) => {
        acc[curValue.id] = curValue
        return acc;
    }, {})
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].pid === undefined) {
            res = arr[i]
            continue;
        }
        if(convertObj[arr[i].pid]) {
            let parent = convertObj[arr[i].pid]
            parent.children = parent.children || []
            parent.children.push(arr[i])
        }
    }
    return res;
}

convertArrToTree(array)

