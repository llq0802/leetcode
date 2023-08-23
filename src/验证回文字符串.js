// 示例 1：

// 输入: s = "A man, a plan, a canal: Panama"
// 输出：true
// 解释："amanaplanacanalpanama" 是回文串。
// 示例 2：

// 输入：s = "race a car"
// 输出：false
// 解释："raceacar" 不是回文串。
// 示例 3：

// 输入：s = " "
// 输出：true
// 解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
// 由于空字符串正着反着读都一样，所以是回文串。


/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  s = s.toLowerCase()
  let i = 0, j = s.length - 1;

  const isValid = function (c) {
    return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
  };


  const left = s[i]

  const right = s[j]

  while (i < j) {
    if (!left) {
      i++;
      continue;
    }
    if (!right) {
      j--;
      continue;
    }

    if (s[i] == s[j]) {
      i++;
      j--;
      continue;
    }

    return false

  }
  return true;



};