function solve(amount, currencyFrom, currencyTo) {
	let currencies = { 'BGN': 1, "USD": 1.79549, "EUR": 1.95583, "GBP": 2.53405 };

	if (currencyTo === 'BGN') {
		console.log((amount * currencies[currencyFrom]).toFixed(2) + ` ${currencyTo}`);
	} else {
		amountInLeva = amount * currencies[currencyFrom];
		console.log((amountInLeva / currencies[currencyTo]).toFixed(2) + ` ${currencyTo}`);
	}

}

solve(20, 'USD', 'BGN');
solve(100, 'BGN', 'EUR');
solve(12.35, 'EUR', 'GBP');
solve(150.35, 'USD', 'EUR');