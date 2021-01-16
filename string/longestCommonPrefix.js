/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length <= 0) return ''
    let p = 0
    let prefixStr = ''
    let len = strs.length;
    while(true) {
        let char = strs[0][p]
        if(!char) return prefixStr
        let i = 0;
        while (i < len) {
            if(strs[i][p] !== char) break;
            i++
        }
        if(i < len) {
            return prefixStr
        }
        prefixStr += char
        p++
    }
};

/**
 * @param {string[]} strs
 * @return {string}
 * 方法二：以第一个字符为最大前缀，依次往后遍历，取前2个，3个... n个的最大前缀
 */
var longestCommonPrefix_1 = function(strs) {
    let len = strs.length;
    if(len <= 0) return ''
    let prefixStr = strs[0]
    for(let i = 1; i < len; i++) {
        while(strs[i].indexOf(prefixStr) !== 0 && prefixStr) {
            prefixStr = prefixStr.slice(0, prefixStr.length - 1)
        }
        if(prefixStr === '') break
    }
    return prefixStr
};

console.log(longestCommonPrefix_1(["flower","flow","flight"]))