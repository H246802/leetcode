/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function matrix(n, m) {
  var result = []
  for(var i = 0; i < n; i++) {
      result.push(new Array(m).fill(1))
  }
  return result
}
var uniquePaths = function(m, n) {
  let dp = matrix(m,n)
  for(let i = 1 ; i < m ; i++){
    // dp[i][0] = 1
    for(let j = 1 ; j < n ; j++){
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m-1][n-1]
};
uniquePaths(7,3)
// @lc code=end

