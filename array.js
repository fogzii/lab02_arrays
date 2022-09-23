/**
 * Compute the sum of the integer array.
 * If the array is empty, the sum is 0.
 *
 * @param {Array<number>} array of integers
 * @returns {number} the sum of the array
 */
function arraySum(array) {
  let total = 0;
  for (const number of array) {
    total += number;
  }
  return total;
}

/**
 * Compute the product of the given integer array.
 * If the array is empty, the product is 1.
 *
 * @param {Array<number>} array of integers
 * @returns {number} the product of the array
 */
function arrayProduct(array) {
  let product = 1;
  for (const number of array) {
    product *= number;
  }
  return product;
}

/**
 * Find the smallest number in the array
 *
 * @param {Array<number>} array of integers
 * @returns {number|null} the smallest number in the array, or
 * null if the array is empty
 */
function arrayMin(array) {
  if (array.length === 0) {
    return null;
  }

  let min = Infinity;
  for (const number of array) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}

/**
 * Find the largest number in the array
 *
 * @param {Array<number>} array of integers
 * @returns {number|null} the largest number in the array, or
 * null if the array is empty
 */
function arrayMax(array) {
  if (array.length === 0) {
    return null;
  }

  let max = -Infinity;
  for (const number of array) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

/**
 * Determine if the array contains a particular element.
 *
 * @param {Array<number>} array of integers
 * @param {number} item integer to check
 * @returns {boolean} whether the integer item is in the given array
 */
function arrayContains(array, item) {
  if (array.includes(item) === true) {
    return true;
  } else {
    return false;
  }
}

/**
 * Create an array that is the reversed of the original.
 *
 * WARNING: a reminder that the original(s) array must not be modified.
 * You can create new arrays if needed.
 *
 * @param {Array<number>} array of integers
 * @returns {Array<number>} a new reversed array
 */
function arrayReversed(array) {
  const arrayReverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayReverse.push(array[i]);
  }
  return arrayReverse;
}

/**
 * Returns the first element in the array
 *
 * @param {Array<number>} array of integers
 * @returns {number|null} the first element in the array,
 * or null if the array is empty
 */
function arrayHead(array) {
  if (array.length === 0) {
    return null;
  }

  return array[0];
}

/**
 * Return all elements in the array after the head.
 *
 * WARNING: a reminder that the original(s) array must not be modified.
 * You can create new arrays if needed.
 *
 * @param {Array<number>} array of integers
 * @returns {Array<number>|null} an array of elements excluding the head,
 * or null if the input array is empty
 */
function arrayTail(array) {
  if (array.length === 0) {
    return null;
  }

  let count = 0;
  for (const number of array) {
    count++;
  }
  return array[count - 1];
}

/**
 * Given two arrays, multiply the elements at each index from arrays and store
 * the result in a third array. If the given two arrays differ in length,
 * excess elements of the larger array will be added on at the end.
 *
 * For example,
 *     [1, 3, 2]
 *   x [2, 4, 3, 5, 9]
 *   -----------------
 *   = [2, 12, 6, 5, 9]
 *
 * The result will be the same if array1 and array2 are swapped.
 *
 * @param {Array<number>} array1 of integers
 * @param {Array<number>} array2 of integers
 * @returns {Array<number>} array1 x array2 at each index
 */
function arraysMultiply(array1, array2) {
  const newArray = [];
  let maxLen = 0;
  let minLen = 0;
  if (array1.length > array2.length) {
    maxLen = array1.length;
    minLen = array2.length;
  } else {
    maxLen = array2.length;
    minLen = array1.length;
  }

  for (let i = 0; i < minLen; i++) {
    newArray.push(array1[i] * array2[i]);
  }

  for (let i = minLen; i < maxLen; i++) {
    if (array1.length === maxLen) {
      newArray.push(array1[i]);
    } else {
      newArray.push(array2[i]);
    }
  }
  return newArray;
}

/**
 * Create a third array containing common elements between two arrays.
 *
 * Each element in the first array can map to at most one element
 * in the second array, and vice versa (one-to-one relationship).
 * 
 * Duplicated elements in each array are treated as separate entities.
 *
 * The order is determined by the first array.
 *
 * A few examples,
 *   arraysCommon([1,1], [1,1,1]) gives [1,1]
 *   arraysCommon([1,1,1], [1,1]) gives [1,1]
 *   arraysCommon([1,2,3,2,1], [5,4,3,2,1]) gives [1,2,3]
 *   arraysCommon([1,2,3,2,1], [2,2,3,3,4]) gives [2,3,2]
 *   arraysCommon([1,4,1,1,5,9,2,7], [1,8,2,5,1]) gives [1,1,5,2]
 *
 * WARNING: a reminder that the original array(s) must not be modified.
 * You can create new arrays if needed.
 *
 * @param {Array<number>} array1 of integers
 * @param {Array<number>} array2 of integers
 * @returns {Array<number>} number of common elements between two arrays
 */
function arraysCommon(array1, array2) {
  const newArray = [];
  for (const number of array1) {
    if (array2.includes(number)) {
      newArray.push(number);
    } 
  }
  return newArray;
}

// ========================================================================= //

/**
 * Some test code
 */

console.assert(arraySum([1, 2, 3, 4]) === 10, 'arraySum([1,2,3,4]) === 10');
console.assert(arrayProduct([1, 2, 3, 4]) === 24, 'arrayProduct([1,2,3,4]) === 24');
console.assert(arrayMin([8, 9, -5, 3, 5, 5]) === -5, 'arrayMin');
console.assert(arrayMin([5, 8, 1, -4, 2, 6]) === -4);
console.assert(arrayMax([-6, 0, 4, 9, 2, -5, 5]) === 9, 'arrayMax');
console.assert(arrayMax([-5, 4, 6, 9, 5, -2]) == 9);
console.assert(arrayContains([], 5) === false, 'arrayContains');

console.log();
console.log(arrayReversed([1, 2, 3, 4, 5]));
console.log();

console.assert(arrayHead([]) === null, 'head');
console.assert(arrayHead([5, 6, 3]) === 5, 'head');
console.assert(arrayTail([]) === null, 'tail');
console.assert(arrayTail([5, 6, 3]) === 3, 'tail');

console.log();
console.log(arraysMultiply([1, 2, 3], [4, 5, 6, 7]));
console.log(arraysMultiply([1, 2, 3, 4, 5], [4, 5, 6, 7]));
console.log();


/**
 * NOTE: you can't directly compare two arrays with `===`, so you may need
 * to come up with your own way of testing arrays this week. For example, you
 * could use console.log() and observe the output manually.
 */

console.log();
console.log('Testing : arrayCommon([1,2,3,2,1], [2,2,3,3,4])');
console.log('Received:', arraysCommon([1, 2, 3, 2, 1], [2, 2, 3, 3, 4]));
console.log('Expected: [ 2, 3, 2 ]');
console.log();

// TODO: your own testing/debugging here
