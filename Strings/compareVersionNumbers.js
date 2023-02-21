/*
Time complexity : O(N+M+max⁡(N,M)), where N and M are lengths of input strings.
Space complexity : O(N+M) to store arrays nums1 and nums2.
*/

var compareVersion = function(v1, v2) {
  const v1Array = v1.split('.');
  const v2Array = v2.split('.');

  let n1 = v1.length;
  let n2 = v2.length;
  let v1Char = 0;
  let v2Char = 0;

  // compare versions
  for (let i = 0; i < Math.max(n1, n2); i++) {

    // to remove the leading zeros from a number, call the parseInt(), passing it the number and 10 as parameters or use + infront like I do with v2
    v1Char = (i < n1) ? parseInt(v1Array[i], 10) : 0;
    v2Char = (i < n2) ? (+v2Array[i]) : 0;

    if (v1Char != v2Char) {
      return v1Char < v2Char ? -1 : 1;
    }
  }
  // the versions are equal
  return 0;
}

console.log(`Expected output: 0 vs. ${compareVersion("1.01", "1.001")}`);
console.log(`Expected output: 0 vs. ${compareVersion("1.0", "1.0.0")}`);
console.log(`Expected output: -1 vs. ${compareVersion("0.1", "1.1")}`);

