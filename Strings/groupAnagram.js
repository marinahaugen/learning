/*
Input:
DNA, DNB, three, four, here, there, Elvis, lives, ether

Example output:
three, there, ether
Elvis, lives
*/

function isAnagram(strs) {
  let groups = {};

  //loop trhough input array, don't need to deal with index --> of
  for (let str of strs) {
    //convert to lowercase, sort and convert to array. Key is sorted value
    const key = str.toLowerCase().split('').sort().join('');
    //if exists in group
    if(groups[key]) {
      //if sorted str as key, push a new str to array
      groups[key].push(str);
    } else {
      //else make key sorted string and add str in array as value
      groups[key] = [str]
    }
  }
    //return the values as an array
    return Object.values(groups);
}
console.log('Alt 1:');
//console.log(isAnagram(['DNA', 'DNB', 'three', 'four', 'here', 'there', 'Elvis', 'lives', 'ether']));

/*
time O(n*k log k)
space O(n*k)
*/


/*
Don't use sort, count char instead.
*/

function isAnagram2(strs) {
  let groups = {};
  //loop trhough input array, don't need to deal with index --> of
  for (let str of strs) {
    //make counter table and fill with count on acsii index. Need to convert lowercase
    const array = new Array(26).fill(0);
    for (let i = 0; i < array.length; i++) {
      const ascii = str.toLowerCase().charCodeAt(i);
      array[ascii-97]+=1; //97 = a --> Subtract a so we get 'a' on index 0
    }
    //construct key as string of count array
    const key = array.join('#');
    //if already a key in group
    if(groups[key]) {
      //add as value in array on key
      groups[key].push(str);
    } else {
      //else make the key and add str in array as value
      groups[key] = [str]
    }
  }
    //return the values as an array
    return Object.values(groups);
}

console.log('Alt 2:');
console.log(isAnagram2(['DNA', 'DNB', 'three', 'four', 'here', 'there', 'Elvis', 'lives', 'ether']));

/*
time O(n*k)
space O(n*k)
*/
