// Reversing an Array

var reverseArray = function(array) {
	let newArray = [];
	for(i = array.length-1; i >= 0; --i)
		newArray.push(array[i]);
	return newArray;
}

var reverseArrayInPlace = function(array) {
	var auxArray = array.splice(0, array.length);
	for(i = auxArray.length-1; i >= 0; --i)
		array.push(auxArray[i]);
}

var array = [2,4,6,8];
console.log('apply reserveArray function to [2,4,6,8] : '+reverseArray(array));
console.log('original array : '+array);
reverseArrayInPlace(array);
console.log('apply reserveArrayInPlace function to [2,4,6,8] : '+array);