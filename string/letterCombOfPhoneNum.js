/**
 * Created by dengxuelian on 2022/3/5
 */
/**
 * @param {string} digits
 * @return {string[]}
 */

const enums = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}
var letterCombinations = function(digits) {
    let charsList = getChars(digits) // ['abc', 'def']
    let ans = []
    recursive(0, "")
    
    function recursive(i, str) {
        if(str.length === charsList.length) {
            ans.push(str)
            return;
        }
        for(let k = 0; k < charsList[i].length; k++) {
            recursive(i+1, str.concat(charsList[i][k]))
        }
        
    }
    function getChars(digits) {
        let charsList = []
        for(let i = 0; i < digits.length; i++) {
            charsList.push(enums[digits[i]])
        }
        return charsList
    }
    return ans;
};

console.log(letterCombinations('234'))


/**
 * 2023/3/1
 * @param {string} digits
 * @return {string[]}
 */

const maps = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}
var letterCombinations = function(digits) {
    let res = []
    let alphaArr = []
    for(let i = 0; i < digits.length; i++) {
        alphaArr.push(maps[digits[i]])
    }
    // alphaArr = ['abc', 'def']
    function recursive(i, str) {
        if(i === alphaArr.length) {
            str.length && res.push(str)
            return;
        }
        for(let j=0; j < alphaArr[i].length; j++) {
            recursive(i+1, str.concat(alphaArr[i][j]))
        }
    }
    recursive(0, '')
    return res;
};