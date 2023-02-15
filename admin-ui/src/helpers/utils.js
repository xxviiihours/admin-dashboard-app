export const currencyFormatter = (number) => {
	return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(
		number ? number : 0
	);
};

export const phoneRegExp = /^(09|\+639)\d{9}$/;

export const inputLabelFormat = (key) => {
	return key
		.replace(/([a-z])([A-Z\d]+)/g, '$1 $2')
		.trim()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};
