function reverseWords(message) {
  let wordArray = message.split(' ');

  for(let i = 0; i < wordArray.length/2; i++) {
    let j = wordArray.length - 1 - i;
    let temp = wordArray[i]
    wordArray[i] = wordArray[j];
    wordArray[j] = temp;
  }
  reversedMsg = wordArray.join(' ');
  console.log(reversedMsg);
}

reverseWords('cake pound steal'); //Prints: "steal pound cake"