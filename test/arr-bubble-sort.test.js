import arrBubbleSort from '../src/arr-bubble-sort'

describe('arrBubbleSort', () => {
	test('numeric sort', () => {
		expect(arrBubbleSort([2, 1, 3])).toStrictEqual([1, 2, 3])
	})
	test('alpha sort', () => {
		expect(arrBubbleSort(['b', 'a', 'c'])).toStrictEqual(['a', 'b', 'c'])
	})
})
