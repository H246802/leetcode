/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  for(let i= 0; i< s.length; i++){
    let el = s[i]
    t = t.replace(el,'')
  }
  return t
};
// @lc code=end

