/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let maxLen = 0
  let sLen = s.length
  let dp = new Array(sLen).fill(0)
  for(let i = 1 ; i < sLen ; i++){
    if(s[i] === ')'){
      if(s[i-1] === '('){
        dp[i] = (i >= 2 ? dp[i-2] : 0) + 2
      }else if (s[i - dp[i - 1] - 1] == '(') {
        // 需要记住公式即可
        if (i - dp[i - 1] - 2 >= 0) {
          dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
        } else {
          dp[i] = dp[i - 1] + 2;
        }
      }
    }
    maxLen = Math.max(maxLen, dp[i])
  }
  return maxLen
};
longestValidParentheses("((()()))")
// @lc code=end

