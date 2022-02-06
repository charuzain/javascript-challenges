/* eslint-disable no-unused-vars */

// This function accepts an array and a searchTerm (this will always be a primitive value) and returns the number of times the searchTerm appears in the array.

// frequency([1, 2, 3, 4, 4, 4], 4); // 3
// frequency([true, false, true, true], false); // 1


const frequency = function(array , searchTerm) {
  let count = 0;
  for (let elem of array) {
    if (elem === searchTerm) {
      count++;
    }
  }
  return count;

};
console.log(frequency([1, 2, 3, 4, 4, 4], 4));
console.log(frequency([true, false, true, true], false));
console.log(frequency(['a', 'b', 'c', 'c'],'c'));


// note : try to solve using reduce