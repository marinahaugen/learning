/*
W: non-alphanumeric
w: alphanumeric incl. _
*/
var isPalindrome = function(s) {
  let lowerCaseS = s.toLowerCase();
  let stripedString = lowerCaseS.replace(/\W/g, '');
  let arr = stripedString.split('');
  for(let i = 0; i < arr.length/2; i++) {
    let j = arr.length-1-i;
    if(arr[i] != arr[j]){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")) //true
console.log(isPalindrome("race a car")) //false
console.log(isPalindrome("")) //true
console.log(isPalindrome("ab_a")) //false