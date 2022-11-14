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
Time complexity: O(n) n is the size of the input string. Index j will iterate n times
Space complexity: O(m) m size of table
Assumption of char set: ASCII (not extended), 128
OPTIMIZED SOLUTON with direct access table. Use index to record the occurrence of char
*/
let lengthOfLongestSubstring3 = function(s) {
  let chars = new Array(128).fill(0); //record how many times a char occurs
  let left = 0; //contract window
  let right = 0; //extend window
  let max = 0;

  while(right < s.length) {
    let rightChar = s.charCodeAt(right);

    /*
    Find char index from table.
    If char index is not null we know that it has appeated previously
    && index lies in the current window (>= left, < right)
    We can contract the window by moving left boundary to (charIndex + 1)
    */
    let charIndex = chars[rightChar];
    if(charIndex != null && charIndex >= left && charIndex < right) {
      left = charIndex + 1;
    }

    max = Math.max(max, right - left + 1);

    //before extending the window we can update the index of the current character
    chars[rightChar] = right;
    right++;
  }
  console.log(`S3: Longest sunstring whitout repeating characters is: ${max}`);
  return max;
}
lengthOfLongestSubstring3('abcabcbb') //Output: 3
lengthOfLongestSubstring3('bbbbb') //Output: 1
lengthOfLongestSubstring3('pwwkew') //Output: 3

//Solution using count of char occurrence
let lengthOfLongestSubstring4 = function(s) {
  let chars = new Array(128).fill(0); //record how many times a char occurs
  let left = 0; //contract window
  let right = 0; //extend window
  let max = 0;

  while(right < s.length) {
    let rightChar = s.charCodeAt(right);
    chars[rightChar]++;

    while(chars[rightChar] > 1) {
      let leftChar = s.charCodeAt(left);
      chars[leftChar]--; //reduce occurrence
      left++; //contract window
    }

    max = Math.max(max, right - left + 1);
    right++; //extend window
  }
console.log(`S4: Longest sunstring: ${max}`);
return max;
}

lengthOfLongestSubstring4('abcabcbb') //Output: 3
lengthOfLongestSubstring4('bbbbb') //Output: 1
lengthOfLongestSubstring4('pwwkew') //Output: 3
