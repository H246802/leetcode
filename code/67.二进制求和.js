/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let lena = a.length
  let lenb = b.length
  let max = Math.max(lena,lenb)
  let flag = 0
  let data = ''
  for (let index = 1; index <= max; index++) {
    let ela = a[lena - index] ? a[lena - index] : 0
    let elb = b[lenb - index] ? b[lenb - index] : 0
    let res = Number(ela) + Number(elb) + flag
    flag = res > 1 ? 1 : 0
    res = res % 2
    data = res + data
  }
  if(flag){
    return '1' + data
  }else{
    return data
  }
};
addBinary('1010','1011')
// @lc code=end

