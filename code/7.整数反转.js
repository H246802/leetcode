/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
function checkInt(x){
  if(x < -Math.pow(2, 31) || x > (Math.pow(2, 31) -1)){
    return 0
  }else{
    return x
  } 
}
var reverse = function(x) {
  // x = checkInt(x)
  if(x>0){
    return checkInt(Number((x+'').split('').reverse().join('')))
  }else{
    x = -1 * x
    return checkInt(-1 * Number((x+'').split('').reverse().join('')))
  }
};
// @lc code=end

