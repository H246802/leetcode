/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 递归破解
// var fib = function(N) {
//   if(N==0) return 0
//   if(N==1) return 1
//   return fib(N-1) + fib(N-2)
// };
// 动态规划
var fib = function(n){
  if(n==0) return 0
  if(n==1) return 1
  let dp = [0,1,1]
  for(let i = 3;i <= n ; i++){
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}
// @lc code=end

