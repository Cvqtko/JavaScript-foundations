function solve(arg1, arg2, arg3) {
	let workDays = parseInt(arg1);
	let payPerDay = parseFloat(arg2);
	let exchangeRate = parseFloat(arg3);

	let monthlySalary = workDays * payPerDay;
	let yearSalary = monthlySalary * 12 + monthlySalary * 2.5;
	let taxes = yearSalary * 0.25;
	let netSalary = yearSalary - taxes;
	let salaryInLeva = netSalary * exchangeRate;
	let netSalaryPerDay = (salaryInLeva/365).toFixed(2)
	return(netSalaryPerDay);
}

console.log(solve(21, 75.00, 1.59));