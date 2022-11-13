/*
Pattern 1: Using a Length-256 Integer Array
Input: lowercase character from 'a-z' = 0-25
Time complexity: O(n log n)
*/
function sortString1(str) {
  sortedString1 = str.split('').sort().join('');
  console.log(`Solution 1: ${sortedString}`);
}

//Time complexity: O(MAX_CHAR * n) which becomes O(n) as MAX_CHAR is  constant
function sortString2(str) {
  const MAX_CHAR = 26;
  charArray = new Array(MAX_CHAR).fill(0);

  for (let c = 0; c < str.length; c++) {
    charArray[str[c].charCodeAt(0) - 'a'.charCodeAt()] += 1;
  }

  sortedArray = new Array();

  for (let i = 0; i < MAX_CHAR; i++) {
    for (let v = 0; v < charArray[i]; v++) {
      sortedArray.push(String.fromCharCode(i + 'a'.charCodeAt()));
    }
  }
  console.log(`Solution 2: ${sortedArray.join('')}`);
}

sortString1('bbccdefbbaa');
sortString2('aacbb');