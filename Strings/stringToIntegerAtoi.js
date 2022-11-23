/*
1. Ignore whitespace
2. Read -/+
3. Read until non-digit
4. Check if in range
*/

var myAtoi = function(s) {

  if (s.length = 0) {
    return 0;
  }

  let number = '';

let i = 0;
let lastIndex = null;
 while (i < s.length && lastIndex != 1) {

    switch (s[i]) {
      case ' ':
        i++;
      case (new RegExp(/\D/)):
        number += s[i];
        i++;
      case ('+' || '-'):
        i++;
      default:
        lastIndex = 1;
        i++;
    }
  }
  if (s[0] = '-') {
    number *= -1;
  }

  return parseInt(number);
}

console.log(myAtoi('12w2'));
console.log(myAtoi('-1 7 9w2'));