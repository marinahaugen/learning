/*
Pattern 1: Using a Length-256 Integer Array
What characters are we using? ASCII (256), a-z (97-122), etc.
Capital letters or lower letter incl.?
*/
function isAnagram(str1, str2) {
  const str1Low = str1.toLowerCase();
  const str2Low = str2.toLowerCase();
  arr = new Array(255).fill(0);

  if (str1.length != str2.length) {
    console.log("Not equal length:", false);
    return false;
  }

  for (let c = 0; c < str1.length; c++) {
    arr[str1Low.charCodeAt(c)] += 1;
  }

  for (let c = 0; c < str2.length; c++) {
    arr[str2Low.charCodeAt(c)] -= 1;
  }

  for (const char of arr) {
    if (char != 0) {
      console.log(`('${str1}', '${str2}') is an anagram:`, false);
      return false;
    }
  }
  console.log(`('${str1}', '${str2}') is an anagram:`, true);
  return true;

}

//Test
isAnagram("AaaBb", "BBaaa");
isAnagram("", "");
isAnagram('aaajjlo', 'as');
isAnagram('as', 'sb');
isAnagram("ab", "ba");
