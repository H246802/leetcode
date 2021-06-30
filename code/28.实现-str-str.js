/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let len1 = haystack.length
  let len2 = needle.length
  if(!needle) {
    return 0
  }
  if(len1 === len2 && haystack === needle){
    return 0
  }
  if(len2 > len1){
    return -1
  }
  for (let index = 0; index <= len1 - len2; index++) {
    let str =  haystack.substr(index, len2)
    if(haystack[index] === needle[0] && str === needle){
      return index
    }
  }
  return -1
};
strStr("mississippi","pi")
// @lc code=end

