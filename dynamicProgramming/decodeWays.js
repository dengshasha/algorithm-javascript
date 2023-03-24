/**
 * Created by dengxuelian on 2023/03/24
 * leetcode link: https://leetcode.com/problems/decode-ways/description/
 */

/**
 * @param {string} s
 * @return {number}
 * 先不考虑 < 1和 >26是不合法的情况来推导通用公式
 * s=‘1‘, way[1] = 1
 * s=’12‘, 组合情况是(1,2) 和(12) way[2] = 2 
 * s=’123‘, 组合情况是(1,2,3), (12,3) 和(1, 23) way[3] = 3
 * 观察这个规律可以得出way[i] = way[i-1] + way[i-2]
 * 在这些组合情况中，需要排除一些不合法的组合情况
 * 情况一：s='0*'s是0开头的任意长度的数字，way=0
 * 情况二：当前位置的数字是0，且前一个位置也是0，或者是大于2，比如s='100', s='130', 则也不能组成字母，way=0
 * 情况三：当前位置的数字是0，且前一个位置的数字是1或者2，比如s='120', 那么当前位置必须要绑定前一个位置的数字组成字母，此时必须要牺牲前一个位置和当前位置的可能性，
 * 那么i位置的组合方式=i-2位置的组合方式（重点理解！！！！因为i-1位置已经被固定使用了）
 * 情况四：当前位置非0，前一个位置是0，则当前位置加入后不会增加组合的可能性，则组合方式不变，way[i] = way[i-1]
 * 情况五：当前+前一个位置大于26，则和情况四一样，way[i] = way[i-1]
 */
var numDecodings = function(s) {
    // 0开头的字符是不合法的情况
    if(s[0] === '0') return 0;
    let dp = []
    // 初始状态，排除了0开头以后，如果s.length=1, 则仅有一个字母。
    dp[0] = 1, dp[1] = 1
    
    for(let i = 1; i < s.length; i++) {
        // 当前字符为0，有两种情况导致整个字符串无法形成合法的字母组合
        // 1. 前一个数字>2
        // 2. 前一个数字是0
        if(s[i] === '0' && (s[i-1] > 2 || s[i-1] === '0')) {
            return 0;
        }
        if(s[i] === '0') {
            //当前字符为0，但是可以和前一个数字组成一个字母，意味着前一个数字必须和当前数字一起使用，则前一个数字位置的
            //可能性不需要考虑，此时当前位置的组成方式=前2个位置的组成方式
            dp[i+1] = dp[i-1]
        } else if(s[i-1] === '0' || s[i-1]+s[i] > 26) {
            //前一个字符为0，当前数字加入后不会增加可能性，所以等于前一个位置的组成方式
            //当前+前一个数字超出了最大值后，当前数字加入后也不会增加可能性
            dp[i+1] = dp[i]
        } else {
            //通用方程
            dp[i+1] = dp[i] + dp[i-1]
        }
    }
    return dp[s.length]
};

console.log(numDecodings('27'))