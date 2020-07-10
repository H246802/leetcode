/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  for(var i = triangle.length-2;i >= 0;i--){
    // 先从倒数第二行计算每行与下一行的最小数据最后一级一级回合到顶部
    for(var j = 0;j < triangle[i].length;j++){
      triangle[i][j] = Math.min(triangle[i+1][j],triangle[i+1][j+1]) + triangle[i][j];
    }
  }
  return triangle[0][0];
};
// @lc code=end

