// The Sum of a Range

var range = function(start, end, step) {
	if ((step == null) || step == 0) step = 1;
	let numbers = [];
	if (step > 0)
		for (i = start; i <= end; i+=step)
			numbers.push(i);
	else
		for (i = start; i >= end; i+=step)
			numbers.push(i);
	return numbers;
}

var sum = function(numbers) {
	let total = 0;
	for(i = 0; i < numbers.length; ++i)
		total += numbers[i];
	return total;
}

console.log('range(1,10,2) : '+range(1,10,2));
console.log('range(5,2,-1) : '+range(5,2,-1));
console.log('Sum of numbers from 1 to 10 : '+sum(range(1,10)));
console.log('Sum of numbers from 8 to 10 : '+sum(range(8,10)));