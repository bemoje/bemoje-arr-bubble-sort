import arrSwap from '@bemoje/arr-swap';
import assertArgs from '@bemoje/assert-args';
import assertType from '@bemoje/assert-type';

/**
 * Sort array by bubbling up bigger values to the right side. Runtime: O(n^2)
 * @param {Array} arr - The array of elements to be sorted
 * @returns {Array}
 */
function arrBubbleSort(arr) {
	assertArgs(arr);
	assertType(Array, arr);

	for (let i = 1; i < arr.length; i++) {
		let swapped = false;

		arr.forEach((element, curr) => {
			if (element > arr[curr + 1]) {
				arrSwap(arr, curr, curr + 1);
				swapped = true;
			}
		});

		if (!swapped) {
			break
		}
	}

	return arr
}

export default arrBubbleSort;
