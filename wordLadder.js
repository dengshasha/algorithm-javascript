/**
 * https://leetcode.com/problems/word-ladder/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let memo = []
    return match(beginWord, 0)
    function match(word, step) {
        if(word === endWord) {
            return step-1;
        }
        let i = 0
        for(i; i < wordList.length; i++) {
            if(memo[i]) continue;
            if(isOnlyOneDiffWord(word, wordList[i])) {
                memo[i] = 1
                step = match(wordList[i], step+1)

            }
        }
        return step
    }
};

function isOnlyOneDiffWord(str1, str2) {
    let diffLen = 0;
    for(let i = 0; i < str1.length; i++) {
        if(str1[i] !== str2[i]) {
            diffLen++;
            if(diffLen > 1) return false
        }
    }
    return diffLen === 1;
}
ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"])
// console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))