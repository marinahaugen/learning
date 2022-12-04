/*
1. Ignore whitespaces in beginning. Discard the rest of input if whitespace in the middle
2. Read -/+ in the beginning. Not valid in the middle of the string then considered non-digit
3. Read until non-digit and ignore the rest. Dicard leading zeros
4. Check if in 32-bit integer range or read char until still in range [-2^31, 2^31-1]

num = num * 10 + digit
if num > 2^31 - 1 then return 2^31 - 1
else if num < -2^31 then return -2^31

Time complexity: O(N)
We visit each character in the input at most once and for each character we spend a constant amount of time.

Space complexity: O(1)
We have used only constant space to store the sign and the result.

*/

var myAtoi = function(s) {

  let sign = 1; //store sign
  let result = 0; //store 32-bit integer result
  let i = 0;
  let n = s.length;
  INT_MAX = Math.pow(2,31) - 1;
  INT_MIN = - Math.pow(2,31);

  if (n == 0) {
    return 0;
  }

  // Discard all spaces from the beginning of the input string.
  while(i < n && s[i] == ' ') {
    i++;
  }

  // sign = +1, if it's positive number, otherwise sign = -1.
  if (i < n && s[i] == '+') {
    sign = 1;
    i++;
  } else if (i < n && s[i] == '-') {
    sign = -1;
    i++;
  }

  // Traverse next digits of input and stop if it is not a digit.
  // End of string is also non-digit character.
  while(i < n && s[i] >= '0' && s[i] <= '9') {
    let digit = s[i] - '0'; // Nice to convert to number

    // Check overflow and underflow conditions.
    if((result > Math.floor(INT_MAX / 10)) ||
       (result == Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
      // If integer overflowed return 2^31-1, otherwise if underflowed return -2^31.
      return sign == 1 ? INT_MAX : INT_MIN;
    }

    // Append current digit to the result.
    result = 10 * result + digit;
    i++;
  }

  // We have formed a valid number without any overflow/underflow.
  // Return it after multiplying it with its sign.
  return sign * result;
}

console.log(myAtoi('12w2'));
console.log(myAtoi('-1 7 9w2'));
console.log(myAtoi('   13w 7 9w2'));