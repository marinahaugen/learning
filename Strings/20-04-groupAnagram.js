/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

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

  };