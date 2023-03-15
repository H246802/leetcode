/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length <= 1) return nums[0];

  let max = nums[0];
  //记录当前找到的最大值
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    const target = nums[i];
    //记录下当前最大值与下一个遍历节点之和与当前节点大小进行比较
    total = Math.max(total + target, target)
    //时刻存储最大值
    max = Math.max(total, max)
  }
  return max
};

var arr1 = [-2, 11, -4, 13, -5, -2];
console.log(maxSubArray(arr1));
// @lc code=end

