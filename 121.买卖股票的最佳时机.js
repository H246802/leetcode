/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let len = prices.length;
  if(len <= 1) return 0
  let min = prices[0]
  let minIndex = 0
  let res = 0
  for(let i = 0 ; i < len - 1 ; i++){
    min = Math.min(min,prices[i])
    if(min === prices[i]){
      minIndex = i
    }
    if(i + 1 - minIndex > 0 ){
      res = Math.max(prices[i + 1] - min,res)
    }
  }
  return res
};
maxProfit([7,6,4,3,1])
// @lc code=end

