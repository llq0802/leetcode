// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"


// 提示：

// 1 <= len <= 1000
// s 仅由数字和英文字母组成

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {

  const len = s.length;

  if (len < 2) {
    return s
  }
  let res = '';
  let resLen = 0



  //从哪个字符开始向两边找？ 
  for (let i = 0; i <= len; i++) {
    fun(i, i);
    fun(i, i + 1)
  }



  //怎么求回文？
  function fun(left, right) {

    while (left >= 0 && right <= len - 1 && s[left] === s[right]) {

      if (right + 1 - left > resLen) {
        resLen = right + 1 - left
        res.s.slice(left, right + 1)
      }

      left--
      right++
    }


  }



  return res
};