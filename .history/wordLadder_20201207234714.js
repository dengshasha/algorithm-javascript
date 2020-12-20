/**
 * https://leetcode.com/problems/word-ladder/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    let memo = []
    
    return match(beginWord, 0)
    function match(word, step=0) {
        if(word === endWord) return step;
        if(wordSet.has(word)) {
            for(let i = 0; i < endWord.length; i++) {
                if(memo[i]) continue
                if(word[i] === endWord[i]) {
                    memo[i] = 1
                    continue;
                }
                let newWord = word.slice(0,i) + endWord[i] + word.slice(i+1)
                match(newWord, step++)
            }
        }
    }
};

console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))