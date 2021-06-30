/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var add = function(num1,num2){
  let maxL =  Math.max(num1.length,num2.length)
  num1 = num1.padStart(maxL,'0')
  num2 = num2.padStart(maxL,'0')
  let result = ''
  let buwei = 0
  for(let i = maxL - 1 ; i>=0 ;i--){
    let res = parseInt(num1[i]) + parseInt(num2[i]) + buwei
    buwei = parseInt(res / 10)
    result = (res % 10) + result
  }
  result = (buwei === 1 ? '1' : '') + result 
  return result
}
// 大数想乘可以转换成 多个大数相加
// 例如 '999' * '99'
// = '999' * '9' + '0' + '999' * '9'
var multiply = function(num1, num2) {
  if(!parseInt(num1) || !parseInt(num2)){
    return '0'
  }
  let result = ''
  for(let i = num2.length - 1 ; i >= 0 ; i--){
    let el = parseInt(num2[i])
    let tempResult = ''
    let buwei = 0
    for(let j = num1.length - 1 ; j>=0 ;j--){
      let res = parseInt(num1[j]) * el + buwei
      buwei = parseInt(res / 10)
      tempResult = (res % 10) + tempResult
    }
    tempResult = (buwei >= 1 ? '' + buwei : '') + tempResult 
    let buZero = '0'.repeat(num2.length - 1 -i)
    result = add(result, tempResult + buZero)
  }
  return result
};
multiply('2','3')
// @lc code=end

