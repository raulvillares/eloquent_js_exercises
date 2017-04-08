var flat = function(arrays) {
	return arrays.reduce(function(accumulatedArray, currentArray) {
		return accumulatedArray.concat(currentArray);
	});
}

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flat(arrays));