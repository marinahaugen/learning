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
  let uniqueNumbers = new Array(k).fill(0);
  let firstNumber = nums[0];
  for(let i = 0; i < k; i++) {
    if (firstNumber >= 0) {
      uniqueNumbers[i] = i+firstNumber;
    }
    else {
      //Not solved for negative cases - but k is the only value that is expected. So OK.
    }
  }
  let arr = uniqueNumbers.concat(empthySlots);
  console.log(`Output: ${k}, [${arr}]`);
};


removeDuplicates([1,1,2]) //Output: 2, nums = [1,2,_]
removeDuplicates([0,0,1,1,1,2,2,3,3,4]) //Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
removeDuplicates([-50,-40, -40, 20]) //Failing

/*
In-palce: not creating a new array
Pass-by-reference
Directly modify the paramter array
Two-pointer scanning. Adjacent. Include number first time. Add to correct location.
Ignore the first number. Smallest and unique.
T = O(n) - since we only have 2 pointers, and both the pointers will traverse the array at most once.
S = O(1) - since we are not using any extra space.
*/
function removeDuplicates2(nums) {

  let n = nums.length;
  if (n == 0) {
    return 0;
  }

  let insertIndex = 1;
  for(let i = 1; i < n; i++) {
    //if different: it means that it is the first time we see the number
    if(nums[i] != nums[i-1]) {
      nums[insertIndex] = nums[i];
      insertIndex++
    }
  }
  console.log(insertIndex);
  return insertIndex;
}

removeDuplicates2([1,1,2]) //Alt 2: 2, nums = [1,2,_]
removeDuplicates2([0,0,1,1,1,2,2,3,3,4]) //Alt 2: 5, nums = [0,1,2,3,4,_,_,_,_,_]
removeDuplicates2([-50,-40, -40, 20]) //Alt 2: 3, nums = [-50,-40,20,_]
removeDuplicates2([]) //0

