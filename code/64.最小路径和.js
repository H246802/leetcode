/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
function matrix(n, m) {
  var result = []
  for(var i = 0; i < n; i++) {
      result.push(new Array(m).fill(0))
  }
  return result
}
var minPathSum = function(grid) {
  // let first = grid[0][0]
  let m = grid.length
  let n = grid[0].length
  if(m == 0 || n == 0){
    return 0
  }
  // let levelIndex = m -1
  // let columnIndex = n -1
  // while((levelIndex + columnIndex) >= 0){
  //   grid[levelIndex][columnIndex] = grid[levelIndex + 1 ][columnIndex]
  // }
  let dp = matrix(m,n)
  dp[0][0] = grid[0][0]
  for(let i = 1 ; i < m; i++){
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }
  for(let j = 1 ; j < n; j++){
    dp[0][j] = dp[0][j-1] + grid[0][j]
  }
  for(let i = 1 ; i < m; i++){
    for(let j = 1; j < n ; j++){
      let top = dp[i-1][j]
      let left = dp[i][j-1]
      dp[i][j] = grid[i][j] + Math.min(top , left)
    }
  }
  return dp[m-1][n-1]
  // for(let i = m - 1; i >= 0 ; i--){
  //   for(let j = n- 2 ; j >= 0 ; j--){
  //     if( (i + 1) > (m -1)){
  //       grid[i][j] = grid[i][j] + grid[i][j + 1]
  //     }else if((j + 1) > (n -1)){
  //       grid[i][j] = grid[i][j] + grid[i + 1][j ]
  //     }else{
  //       grid[i][j] = grid[i][j] + Math.min(grid[i][j + 1], grid[i + 1][j])
  //     }
  //   }
  // }
  // return grid[0][0]
};
var arr = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
minPathSum(arr)


// ## 总结错误原因,一直想要从末尾到开头,只想着两个 for 循环解决,没想到引入新的数组

// 3 * 3 

// 2 1 = 2 1 + 2 2
// 1 2 = 1 2 + 2 2

// 2 0 = 2 0 + 2 1
// 0 2 = 0 2 + 1 2
// 1 1 = 1 1 + min(2 1 ,1,2)

// 1 0 = 1 0 + min(2 0, 1 1)
// 0 1 = 0 1 + min(0 2, 1 1)

// // 1 3 3 
// // 1 7  
// 2 * 4

// 1 2 = 1 2 + 1 3
// 0 3 = 0 3 + 1 3

// 1 1 = 1 1 + 1 2
// 0 2 = 0 2 + min( 0 3 , 1 2)

// 1 0 = 1 0 + 1 1
// 0 1 = 0 1 + min(0 2, 1 1)


// 1 3 1
// 1 5 2
// 4 3 
// grid[m-1][n-2] = grid[m-1][n-2] + grid[m-1][n-1] 
// grid[m-2][n-1] = grid[m-2][n-1] + grid[m-1][n-1] 

// 2 1
// 1 2

// 1 3 3
// 1 7 
// 7

// grid[m-1][n-3] = grid[m-1][n-3] + grid[m-1][n-2] 
// grid[m-3][n-1] = grid[m-3][n-1] + grid[m-2][n-1] 
// grid[m-2][n-2] = grid[m-2][n-2] + min(grid[m-1][n-2],grid[m-2][n-1])
// 2 0 
// 0 2
// 1 1

// 1 6
// 8

// grid[m-2][n-3] = grid[m-2][n-3] + min(grid[m-1][n-3],grid[m-2][n-2])
// grid[m-3][n-2] = grid[m-3][n-2] + min(grid[m-3][n-1],grid[m-2][n-2])

// 1 0
// 0 1

// 1 3 1 1
// 1 5 1 1

// 3 1 2 * 4  
// 1 3 
// 3 2   4 * 4
// 2 3


// @lc code=end

