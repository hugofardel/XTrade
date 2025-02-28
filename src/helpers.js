export function round(amount, nbDecimal = 2) {
	const round = Math.round(amount + "e" + nbDecimal);
	return Number(round + "e" + -nbDecimal);
}

export function valueToCurrency(value, currency = "USD", locale = "en-US") {
	return new Intl.NumberFormat(locale, { style: "currency", currency: currency }).format(value);
}
