type NestedNumber = number | NestedNumber[];

export const addNumbers = (data: unknown[]): number => {
	const getNumber = (item: NestedNumber): number => {
		if (typeof item === 'number') return item;

		return getNumber(addNumbers(item));
	};

	return data.reduce<number>((sum, item) => {
		const number = getNumber(item as NestedNumber);

		return sum + number;
	}, 0);
};

export const factorial = (input: number): number => (input < 2 ? 1 : input + factorial(input - 1));
