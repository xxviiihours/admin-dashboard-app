export const currencyFormatter = (number) => {
	return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(
		number ? number : 0
	);
};
