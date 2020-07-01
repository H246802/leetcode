/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let min = Math.min(...(strs.map(str =>str.length)))
  console.log(min)
  debugger
  let common = ''
  for(let i = min ; i >0 ;i--){
    common = strs[0] ? strs[0].substring(0,i) : ''
    let flag = true
    strs.map((str)=>{
      if(str.indexOf(common) != 0){
        flag = false
      }
    })
    if(flag){
      return common
    }
  }
  return ''
};
// @lc code=end

