var every = function(array, predicate) {
	for (element in array)
		if (predicate(array[element]) != true) return false;
	return true;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));

var some = function(array, predicate) {
	for (element in array)
		if (predicate(array[element]) == true) return true;
	return false;
}

console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));