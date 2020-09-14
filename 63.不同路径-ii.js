/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function matrix(n, m) {
  var result = []
  for(var i = 0; i < n; i++) {
      result.push(new Array(m).fill(1))
  }
  return result
}
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  // 生成dp
  let dp = matrix(m,n)
  // 修改 obstacleGrid, 边缘 有 1,则一排都是 1
  for(let i = 0 ; i < m; i++){
    obstacleGrid[i][0] = obstacleGrid[i][0] || (i === 0 ? 0 : obstacleGrid[i - 1][0] )
  }
  for(let j = 0 ; j < n; j++){
    obstacleGrid[0][j] = obstacleGrid[0][j] || (j === 0 ? 0 :obstacleGrid[0][j-1] )
  }
  // 当 obstacleGrid为 1 时,dp 不能走 ,为 0 
  dp.map((item,i)=>{
    item.map((it,j)=>{
      dp[i][j] =  obstacleGrid[i][j] ? 0 : 1
    })
  })
  
  for(let i = 1 ; i < m ; i++){
    for(let j = 1 ; j < n ; j++){
      dp[i][j] = !dp[i][j] ? 0 : ( dp[i-1][j]  +  dp[i][j-1])
    }
  }
  return dp[m-1][n-1]
};
let arr = [[0,1],[1,1],[0,0]]
// let arr = [[0,1],[1,1],[0,0]]
// let arr = [[0,1]]

uniquePathsWithObstacles(arr)
// @lc code=end

