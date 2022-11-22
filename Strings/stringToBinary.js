/*

Get the ASCII value of a character: c.toCodeAt()
Convert an ASCII value into a character:  String.fromCharCode(n1, n2, ..., nX)
Convert a digit character into its integer value (ie. convert "5" into 5): parseInt(Value, radix)
It accepts a string as a value and converts it to specified radix system (any desired numerical value passed by a user)
and returns an integer (corresponding to the passed in numerical radix value).
*/

function stringToBinary(string) {

  let bianryChar = '';
  for (let i = 0; i < string.length; i++) {

    bianryChar += string.charCodeAt(i).toString(2) + ' ';
  }
  console.log(bianryChar);
}

stringToBinary('GFG');
stringToBinary('geeks');