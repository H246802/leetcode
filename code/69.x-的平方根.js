/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(!x) return 0
  if(x === 1) return 1
  let left = 1
  let right = x / 2
  while(parseInt(left) != parseInt(right)){
    let min = (left + right) / 2 
    if(min * min > x){
      right = min
    }else{
      left = min
    }
  }
  return parseInt(left)
};
mySqrt(4)
// @lc code=end

