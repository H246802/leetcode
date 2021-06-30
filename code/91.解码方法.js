/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let sLen = s.length
  if(sLen === 0) return 0
  if(s[0] === '0') return 0
  let dp = new Array(sLen + 1)

  dp[0] = 1
  for(let i = 0 ; i < sLen ; i++){
    dp[i+1] = s[i] === '0' ? 0 : dp[i]
    if(i > 0 && (s[i-1] === '1' || (s[i-1] === '2' && s[i] <= '6'))){
      dp[i+1] += dp[i-1]
    }
  }
  return dp[sLen]
};
numDecodings('226')
// @lc code=end

