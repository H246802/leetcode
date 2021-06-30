/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

/**
 * 解题三个步骤
 * 1.将问题分解成最优子问题
 * 2.用递归的方式将问题分解成最优子问题的解
 * 3.将递归转成迭代
 *
 *
 * 一、最优子问题
 * 方案一:挑选的房子含有最后一栋
 * 方案二:挑选的房子不包含最后一栋
 * 获得最大收益的答案 就是方案一与方案二的最大值
 *
 */
/**
 * 二、最优子问题的递归表述
 * @param {*} nums
 * @param {*} lastIndex
var robTo = function (nums, lastIndex) {
  if (lastIndex === 0) {
    return nums[0];
  }
  if (lastIndex < 0) {
    return 0;
  }
  // 方案一，包含最后一栋房子，则应该丢弃倒数第二栋房子
  let sum1 = robTo(nums, lastIndex - 2) + nums[lastIndex];
  // 方案二，不包含最后一栋房子，那么方案二的结果就是到偷到 lastIndex-1 为止的最优结果
  let sum2 = robTo(nums, lastIndex - 1);
  return Math.max(sum1, sum2);
};

var rob = function (nums) {
  if (!nums[0]) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  return robTo(nums, nums.length - 1);
};
*/
/**
 * 对递归问题举例说明
 * 例子
 * nums = [2,7,9,3,1], nums.length = 5
 * robTo(nums,4)
 * sum1 = robTo(nums, 2) + nums[4]
 * = max((robTo(nums,0) + nums[2]), robTo(nums, 1)) + nums[4]
 * = max((nums[0] + nums[2]), robTo(nums, 1)) + nums[4]
 * = max(11, max((robTo(nums, -1) + nums[0]),robTo(nums, 0))) + nums[4]
 * = max(11, max(2,2)) + nums[4]
 * = 11 + 1
 * = 12
 *
 * sum2 = robTo(nums, 3)
 * = max((robTo(nums,1) + nums[3]), robTo(nums, 2))
 * = max((robTo(nums,1) + 3), max(robTo(nums, 0) + nums[2] , robTo(nums, 0)))
 * = max(max((robTo(nums, -1) + nums[0]),robTo(nums, 0)) + 3), max(robTo(nums, 0) + nums[2] , robTo(nums, 0)))
 * = max(max(2,2) + 3, max(2 + 9 , 2))
 * = max(2 + 3, 11)
 * = max(5, 11)
 * = 11
 *
 * res = max(12,11) = 12
 *  */

/**
 * 三、将递归转成迭代
 */

var rob = function (nums) {
  if (!nums.length) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  // 仍然用两个变量来存储方案一和方案二的最优结果
  // 不同的是，这次从0开始，lastIndex 取最小值 1
  let sum1 = nums[0];
  let sum2 = nums[1];

  // 然后通过迭代不断增大 lastIndex，过程中维护新的sum1，sum2，直到数组末尾
  for (let lastIndex = 2; lastIndex < nums.length; lastIndex++) {
    let tmp = sum1;

    // 此时的方案一就是上一步中的方案二，
    // 但要求的是最优解，所以要判断前一步的 sum1 和 sum2 哪个更大
    if (sum2 > sum1) {
      sum1 = sum2;
    }

    // sum2 是包含最后一栋房子的方案，
    // 每向后增加一栋房子，就是前一步的 sum1（不包含 lastIndex - 1 ）
    // 加上当前 lastIndex 栋房子的金钱
    sum2 = tmp + nums[lastIndex];
  }
  return Math.max(sum1, sum2);
};
rob([0,3,2,0])
/**
 * 对迭代问题举例说明 [2,7,9,3,1]
 * 0. sum1 = 2 ,sum2 = 7
 * 1. temp = sum1 = 2 ,sum1 = sum2 = 7 , sum2 = temp + nums[2] = 2 + 9
 * 2. temp = sum1 = 7, sum1 = sum2 = 11, sum2 = temp + num[3] = 7 + 3 = 10
 * 3. temp = sum1 = 11, sum1 = sum2 = 10, sum2 = 11 + num[4] = 11 + 1 = 12
 * 
 * 对迭代问题举例说明 [0,3,2,0]
 * 0. sum1 = 0 ,sum2 = 3
 * 1. temp = sum1 = 0 ,sum1 = sum2 = 3 , sum2 = temp + nums[2] = 0 + 2
 * 2. temp = sum1 = 3, sum1 = sum2 = 2, sum2 = 3 + num[3] = 3
 * 
 */
// @lc code=end
