/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let left = 0, right = 0
    let sTrim = s.trim()
    const MAX_INTERGER = Math.pow(2,31)
    const MIN_INTERGER = -MAX_INTERGER
    if(sTrim.length >= 2 && (sTrim[0] === '-' || sTrim[0] === '+') && /\d/.test(sTrim[1])) {
        right++;
    }
    for(let i = 0; i < sTrim.length; i++) {
        if(i === 0 && (sTrim[i] === '-' || sTrim[i] === '+')) continue;
        if(!/\d/.test(sTrim[i])) break;
        right++;
    }
    let value = Number(sTrim.substring(left, right));
    if(value > MAX_INTERGER) return MAX_INTERGER
    if(value < MIN_INTERGER) return MIN_INTERGER
    return value
};

console.log(myAtoi('-42'))
console.log(myAtoi('-+42'))