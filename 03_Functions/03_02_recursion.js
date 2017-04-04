var isEven = function(number) {
	let absolute = Math.abs(number);
	if (absolute == 0)
		return true;
	else if (absolute == 1)
		return false;
	else
		return isEven(absolute-2);
}

console.log('Number 0 is even? : '+isEven(0));
console.log('Number 1 is even? : '+isEven(1));
console.log('Number 2 is even? : '+isEven(2));
console.log('Number 3 is even? : '+isEven(3));
console.log('Number 50 is even? : '+isEven(50));
console.log('Number 75 is even? : '+isEven(75));
console.log('Number -1 is even? : '+isEven(-1));
console.log('Number -2 is even? : '+isEven(-2));