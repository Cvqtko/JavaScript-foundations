function solve(date) {
	let [day, month, year] = date.split("-");
	let dateNow = new Date(year, month - 1, day);

	dateNow.setDate(dateNow.getDate() + 1000);

	let futureMonth = parseInt(dateNow.getMonth()) + 1 > 9 ? parseInt(dateNow.getMonth()) + 1 : "0" + (parseInt(dateNow.getMonth()) + 1);
	let futureDay = dateNow.getUTCDate() > 9 ? dateNow.getUTCDate() : "0" + dateNow.getUTCDate();
	console.log(futureDay + "-" + futureMonth + "-" + dateNow.getFullYear());
}

solve("25-02-1995");
solve("07-11-2003");
solve("14-06-1980");
solve("01-01-2012");
solve("30-12-2002");