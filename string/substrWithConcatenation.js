/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * leetcode address: https://leetcode.com/problems/substring-with-concatenation-of-all-words/
 */
var findSubstring = function(s, words) {
    let hash = {}
    let sLen = s.length;
    let wordsLen = words.length
    let wordItemLen = words[0].length;
    let wordsSize = wordItemLen * wordsLen
    let ans = []
    for(let i = 0; i < wordsLen; i++) {
        hash[words[i]] = hash[words[i]] ? ++hash[words[i]] : 1;
    }
    for(let i = 0; i <= sLen-wordsSize; i++) {
        if(check(i)) {
            ans.push(i)
        }
    }
    function check(pos) {
        let hashCopy = Object.assign({}, hash)
        let validCount = 0
        while(validCount < wordsLen) {
            let sub = s.substring(pos, pos+wordItemLen)
            if(!hashCopy[sub]) break;
            validCount++
            hashCopy[sub]--
            pos += wordItemLen
        }
        return validCount === wordsLen
    }
    return ans
};
console.log('[1]',findSubstring("ababaab",["ab","ba","ba"]))
console.log('[0,1,2,3,4,5,6,7,8,9,10]:',findSubstring("aaaaaaaaaaaaaa",["aa","aa"]))
console.log('[13]', findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake",["fooo","barr","wing","ding","wing"]))
console.log('[6,9,12]',findSubstring("barfoofoobarthefoobarman",["bar","foo","the"]))
console.log('[]',findSubstring("wordgoodgoodgoodbestword",["word","good","best","word"]))
console.log('[8]',findSubstring("wordgoodgoodgoodbestword",["word","good","best","good"]))