'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let lowBoundary = 0
	let upperBoundary = array.length-1
	let midIndex = Math.floor((upperBoundary-lowBoundary) / 2)
	if (target < array[0] || target>array[array.length-1]) return false
	while (midIndex > -1 && midIndex < array.length) {
		if (array[midIndex]===target) return true
		if (array[midIndex]<target) {
			upperBoundary = midIndex
			midIndex = Math.floor((upperBoundary - lowBoundary) / 2)

		}
		if (array[midIndex>target]) {
			lowBoundary = midIndex
			midIndex = Math.floor((upperBoundary - lowBoundary/ 2)+ lowBoundary)

		}
	}
	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
