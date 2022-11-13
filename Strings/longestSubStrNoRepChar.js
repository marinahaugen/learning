/*
Pattern 1: Using a Length-256 Integer Array
SLIDING WINDOW APPROACH

Time complexity: O(n^2)
Space compelxity: O(n)
*/
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let windowStart = 0;
  const soFar = {};

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];
    soFar[rightChar] = soFar[rightChar] + 1 || 1;

    while(soFar[rightChar] > 1) {
      let leftChar = s[windowStart];

      if(soFar[leftChar] > 1) {
        soFar[leftChar]--;
      } else {
        delete soFar[leftChar];
      }
      windowStart++;
    }
    max = Math.max(max, (windowEnd - windowStart) + 1);
  }
  console.log(`S1: Longest sunstring whitout repeating characters is: ${max}`);
  return max;
};
lengthOfLongestSubstring('abcabcbb');

/*
Time complexity: O(n)
Space compelxity: O(n)
*/
var lengthOfLongestSubstring2 = function(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  //check the easy cases so you don't need to continue
  if(s.length === 0) return 0;
  if(s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    //if char already in set, delete and move window to the right. Else add char to set
    while (set.has(s[i])) {
      set.delete(s[left])
      left++;
    }
    set.add(s[i]);
    maxSize = Math.max(maxSize, i-left+1);
  }
  console.log(`S2: Longest sunstring whitout repeating characters is: ${maxSize}`);
  return maxSize;
}
lengthOfLongestSubstring2('abcabcbb');

/*
Time complexity: O(n). Index j will iterate n times
Space complexity: O(min(m,n))
Assumption of char set: ASCII (not extended), 128
*/
let lengthOfLongestSubstring3 = function(s) {
  let chars = new Array(128).fill(0);
  let left = 0;
  let right = 0;
  let max = 0;
  /*
  let rightChar = s.charCodeAt(right);
  console.log(`print chars: ${chars}`)
  console.log(`print right char code: ${rightChar}`)
  console.log(`print char index: ${chars[rightChar]}`)
  */

  //Go through the whole string
  while(right < s.length) {
    let rightChar = s.charCodeAt(right);
    let charIndex = chars[rightChar];
    if(charIndex != null && charIndex >= left && charIndex < right) {
      left = charIndex + 1;
    }

    max = Math.max(max, right - left + 1);

    chars[rightChar] = right;
    right++;
  }
  console.log(`S3: Longest sunstring whitout repeating characters is: ${max}`);
  return max;
}
lengthOfLongestSubstring3('abcabcbb') //Output: 3
lengthOfLongestSubstring3('bbbbb') //Output: 1
lengthOfLongestSubstring3('pwwkew') //Output: 3
