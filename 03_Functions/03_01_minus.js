var min = function(number1, number2) {
	if(number1 <= number2)
		return number1;
	else if(number2 < number1)
		return number2;
	else
		return NaN;
}

console.log(min(0, 10));
console.log(min(0, -10));