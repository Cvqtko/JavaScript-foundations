function numberOfSeats(arg1, arg2) {
	let lengthInMeters = parseFloat(arg1)*100;
	let widthInMeters = parseFloat(arg2)*100;
	
	let numberOfRows = Math.trunc(lengthInMeters/120);
	let numberOfCols = Math.trunc((widthInMeters-100)/70);
	
	let numberOfSeats = numberOfRows*numberOfCols-3;
	return numberOfSeats;
}

console.log(numberOfSeats(15,8.9));
console.log(numberOfSeats(8.4,5.2));