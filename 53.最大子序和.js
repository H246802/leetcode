/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0
  let res = nums[0]
  for (const num of nums) {
    if(sum > 0){
      sum += num
    }else{
      sum = num
    }
    res = Math.max(res, sum)
  }
  return res
};
// @lc code=end

