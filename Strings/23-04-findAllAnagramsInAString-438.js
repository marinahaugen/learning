/*
- multiple pattern search in a string
- pattern is known and set of char is limited to 26 lowercase english letters
- use fixed size array with 26 elements for letter counter (hashmap is more costly in some programming languages)
- solved by sliding window approach in a linear time

Algo:
- Build referance array counter for p --> pCount
- Move sliding window along string s. Find sCount at each step by +1 on the right and -1 on the left.
- If sCount == pCount, update the output list
- Output the return list

Time complexity: One pass along each string. When Ns >= Np --> O(Ns + Np), but since this only happens when Ns >= Np --> can simplify to O(Ns)
Space complexity: pCount and sCount will contain at most K elements (constant, fixed) --> Thus O(1)

*/

var findAnagrams = function(s, p) {
  let output = [];
  let pCount = new Array(26).fill(0);
  let sCount = new Array(26).fill(0);
  let Np = p.length;
  let Ns = s.length;

  //array counter for p
  for (let i = 0; i < Np; i++) {
    pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  //sliding window on string s
  for (let i = 0; i < Ns; i++) {
    sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    // Remove one letter from the left side of the window
    if (i >= Np) {
    sCount[s.charCodeAt(i - Np) - 'a'.charCodeAt(0)]--;
    }

    // Compare array in the sliding window with the reference array
    if (arraysEqual(pCount, sCount)) {
      output.push(i - Np + 1);
    }
  }
  console.log(`Expected output: ${output}`);
  return output
}

function arraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

findAnagrams('abab', 'ab');
//Expected output: [0,1,2]