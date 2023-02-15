export const currencyFormatter = (number) => {
	return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(
		number ? number : 0
	);
};

export const phoneRegExp = /^(09|\+639)\d{9}$/;