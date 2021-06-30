/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows === 0){
    return []
  }
  if(numRows === 1){
    return [[1]]
  }
  if(numRows === 2){
    return [[1],[1,1]]
  }
  let arrs = [
    [1],
    [1,1],
  ]
  for(let i = 2 ; i < numRows; i++){
    let arr = []
    arr[0] = 1
    arr[i] = 1
    for(let j = 1 ; j < i; j++){
      arr[j] = arrs[i-1][j-1] + arrs[i-1][j]
    }
    arrs.push(arr)
  }
  return arrs
};
// @lc code=end

