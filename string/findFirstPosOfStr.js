/**
 * Created by dengxuelian on 2022/11/4
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 解法1
var strStr = function(haystack, needle) {
    let h_size = haystack.length, n_size = needle.length;

    for(let i = 0; i <= h_size - n_size; i++) {
        if(haystack[i] !== needle[0]) continue;
        if(findSubStr(i, needle)) {
            return i
        }
    }

    function findSubStr(index, str) {
        if(str === '') return true;
        if(index >= h_size || haystack[index] !== str[0]) return false;
        return findSubStr(index+1, str.slice(1))
    }
    return -1
};

//解法2
var strStr_1 = function(haystack, needle) {
    let h_size = haystack.length, n_size = needle.length;
    let start = 0, end = n_size;
    while(end <= h_size) {
        if(haystack.slice(start, end) === needle) return start;
        start++;
        end++;
    }
    return -1
}