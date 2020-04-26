(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/arr-swap'), require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/arr-swap', '@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-bubble-sort'] = factory(global.arrSwap, global.assertArgs, global.assertType));
}(this, (function (arrSwap, assertArgs, assertType) { 'use strict';

	arrSwap = arrSwap && Object.prototype.hasOwnProperty.call(arrSwap, 'default') ? arrSwap['default'] : arrSwap;
	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

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

	return arrBubbleSort;

})));
