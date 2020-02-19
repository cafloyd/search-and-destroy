'use strict';

// Complete this algo
// const binarySearch = (array, target) => {
// 	let lowBoundary = 0
// 	let upperBoundary = array.length-1
// 	let midIndex = Math.floor((upperBoundary-lowBoundary) / 2)
// 	if (target < array[0] || target>array[array.length-1]) return false
// 	while (midIndex > 0 && midIndex < array.length) {
// 		if (array[midIndex]===target) return true
// 		if (array[midIndex]<target) {
// 			upperBoundary = midIndex
// 			midIndex = Math.floor((upperBoundary - lowBoundary) / 2)
// 			continue
// 		}
// 		if (array[midIndex>target]) {
// 			lowBoundary = midIndex
// 			midIndex = Math.floor((upperBoundary - lowBoundary/ 2)+ lowBoundary)
// 			continue
// 		}
// 	}
// 	return false
// };

const binarySearch = (array, target) => {
	if (target < array[0] || target > array[array.length - 1]) return false
	let midIndex = Math.floor(array.length/2)
	if (target === array[midIndex]) return true
	if (target < array[midIndex]){
		let lowerHalf = array.slice(0, midIndex)
		return binarySearch(lowerHalf, target)
	}
	if (target > array[midIndex]){
		let upperHalf = array.slice(midIndex)
		return binarySearch(upperHalf, target)
	}
}

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
