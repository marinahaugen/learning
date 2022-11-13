/*
Using 2 Pointers
*/

var removeDuplicates = function(nums) {
  let arrCount = new Array(nums.length).fill('_');

  let j = 1;
  let i = 0;
  let nextNumber = 0;
  while(nextNumber < nums.length) {
      while(nums[nextNumber] == nums[nextNumber+j]) {
          j++;
      }
      arrCount[i] = j;
      i++;
      nextNumber += j
      j = 1;
  }

  let k = arrCount.indexOf('_');
  let numberOfEmpthySlots = nums.length - k;
  let empthySlots = new Array(numberOfEmpthySlots).fill('_');
  console.log(empthySlots);
  //TODO: convert count to number of occurances, first element should be nums[0]
  let arr = arrCount.concat(empthySlots);
  console.log(`Output: ${k}, ${arr}`);
};
//TODO: Test with negative numbers

removeDuplicates([1,1,2]) //Output: 2, nums = [1,2,_]
removeDuplicates([0,0,1,1,1,2,2,3,3,4]) //Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]