/**
 * Created by dengxuelian on 2022/9/25
 */

/**
 * leetcode link: https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let t_size = t.length, s_size = s.length;
    if(t_size > s_size) return '';

    // hash: 用于存储当前子字符串中含有的t字符串的情况
    // hash_min: 当前的子字符串有哪些字符
    // hash_con: t字符串每个字符出现的情况，该值为常量，不会改变。
    let hash = {}, hash_min = {}, hash_con = {}, min = ''

    for(let i = 0; i < t_size; i++) {
        hash[t[i]] = hash[t[i]] || 0
        hash_con[t[i]] = hash_con[t[i]] || 0
        hash_min[t[i]] = 0;
        hash[t[i]]++;
        hash_con[t[i]]++;
    }

    let start = 0, end = 0;
    // 记录上一次合法字符的区间范围
    let pre_start=start, pre_end=end;

    while(s_size - start >= t_size) {
        let cur_min = ''

        if (hash[s[start]] === undefined) {
            start++
            continue;
        }
        // 当前这个字符已经包含了，判断条件是当前的区间里包含某个字符数量大于等于该字符出现在t中的数量。
        if(hash_min[s[pre_start]] >= hash_con[s[pre_start]]) {
            cur_min = s.slice(start, pre_end)
            hash[s[pre_start]]--;
        } else {
            // 初始时，区间是(0,0)，需要在s中找到所有t中出现的字符，所以size传t的length
            // 从第二次循环开始，我们只会移除一个有效字符，也只需要在剩余字符中找到一个即可，所以size始终传1
            end = getMin(pre_end, pre_end > 0 ? 1 : t_size)
            if(end === -1) break;
            cur_min = s.slice(start, end);
        }
        min = min === '' ? cur_min : (min.length > cur_min.length ? cur_min : min);
        hash[s[start]]++;
        hash_min[s[start]]--;
        pre_start = start;
        pre_end = end;
        start++;
    }


    function getMin(pointer, size) {
        // find the min window
        if(size === 0) return pointer;

        // invalid window
        if(pointer > s_size) return -1

        if(hash[s[pointer]] !== undefined) {
            hash_min[s[pointer]]++;
        }
        // t has this char
        if(hash[s[pointer]] > 0) {
            hash[s[pointer]]--;
            return getMin(pointer+1, size-1)
        }
        // t dones't have this char
        return getMin(pointer+1, size)
    }

    return min;
};