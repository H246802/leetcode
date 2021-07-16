/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
  // if(s.length <= 1) return s
  // let res = 0
  // let left = 0
  // let right = 0
  // for(let i = 0 ; i < s.length ;i++){
  //   let foot = s.length
  //   let resolveS = s.substring(i,foot).split('').reverse().join('')
  //   while(resolveS !== s.substring(i,foot) && foot > i){
  //     foot--
  //     resolveS = s.substring(i,foot).split('').reverse().join('')
  //   }
  //   if(foot - i > res){
  //     left = i
  //     right = foot
  //     res = foot - i
  //   }
  // }
  // console.log(res,left,right)
  // return s.substring(left,right)

  // if (s.length <= 1) return s;
  // let res = s[0];
  // const dp = [];

  // // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]
  // for (let i = s.length - 1; i >= 0; i--) {
  //   dp[i] = [];
  //   for (let j = i; j < s.length; j++) {
  //     if (j - i === 0) {
  //       dp[i][j] = true;
  //     } else if (j - i === 1 && s[i] === s[j]) {
  //       dp[i][j] = true;
  //     }
  //     // specail case 2
  //     else if (s[i] === s[j] && dp[i + 1][j - 1]) {
  //       // state transition
  //       dp[i][j] = true;
  //     }

  //     if (dp[i][j] && j - i + 1 > res.length) {
  //       // update res
  //       res = s.slice(i, j + 1);
  //     }
  //   }
  // }

  // return res;
// };
// 这个问题的难点在于记录当前数据的 
//  第一个元素的 01 02 03 ----> 0 s.leng-1 是否是回文
// 此时不适合用正序的原因在于,没办法记录后续是否是回文,需要使用 reserve 判断,成本高,且不适合复用
var longestPalindrome = function(s){
  let len = s.length
  if(len <= 1) return s
  let dp = []
  let res = s[0]
  for(let i = len - 1 ; i >= 0; i--){
    dp[i] = []
    for(let j = i ; j < len ;j ++){
      if(i === j){
        dp[i][j] = true
      } else if(j - i === 1 && s[i] === s[j]){
        dp[i][j] = true
      }else if(s[i] === s[j] && dp[i + 1][j - 1]){
        dp[i][j] = true
      }
      if(dp[i][j] && j-i + 1 > res.length){
        res = s.slice(i,j + 1)
      }
    }
  }
  return res
}

// longestPalindrome("abcd")
// console.log(
//   longestPalindrome(
//     // "abca"
//     "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
//   )
// );
// @lc code=end
