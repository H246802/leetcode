/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let a = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,
    'IV':4,
    'IX':9,
    'XL':40,
    'XC':90,
    'CD':400,
    'CM':900,
  }
  let start = 0,end = 0
  let res = 0
  while(end < s.length){
    let check = 2
    let r = s.substring(start,start + check)
    if(!a[r]){
      check = 1
      r = s.substring(start,start + check)
    }
    end = start + check
    res += a[r]
    start = end
  }
  console.log(res)
  return res
};
// @lc code=end

