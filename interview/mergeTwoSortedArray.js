/**
 * @param {number []} arr1
 * @param {number []} arr2 
 * @returns {number []}
 */
function mergeTwoSortedArray(arr1, arr2) {
    let p1 = 0, p2 = 0
    let len1 = arr1.length, len2 = arr2.length
    let res = []
    while(p1 < len1 && p2 < len2) {
        if(arr1[p1] === arr2[p2]) {
            res.push(arr1[p1], arr2[p2])
            p1++;
            p2++;
            continue;
        }
        if(arr1[p1] < arr2[p2]) {
            res.push(arr1[p1])
            p1++
        } else {
            res.push(arr2[p2]) 
            p2++;
        }
    }
    if(p1 < len1) {
        res = res.concat(arr1.slice(p1))
    }
    if(p2 < len2) {
        res = res.concat(arr2.slice(p2))
    }
    return res
}

console.log(mergeTwoSortedArray([1,2, 6, 8], [3, 10, 12, 17]))