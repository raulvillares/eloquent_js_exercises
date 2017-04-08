// A List

var arrayToList = function(array) {
	var list = {};
	if (array.length == 0) {
		list.rest = null;
	} else {
		list.value = array[0];
		array.shift();
		list.rest = arrayToList(array);
	}
	return list;
}

console.log('list from array [1,2,3] : '+JSON.stringify(arrayToList([1,2,3])));

var listToArray = function(list) {
	var array = [];
	while (list.rest != null) {
		array.push(list.value);
		list = list.rest;
	}
	return array;
}

console.log('and back to array : '+listToArray(arrayToList([1,2,3])));

var prepend = function(element, list) {
	var newList = {};
	newList.value = element;
	newList.rest = list;
	return newList;
}

var list = {"value":1,"rest":{"value":2,"rest":{"value":3,"rest":{"rest":null}}}};
console.log('prepend element 0 to list : '+JSON.stringify(prepend(0, list)));

var nth = function(list, position) {
	if(list == null)
		return undefined;
	else if (position == 0)
		return list.value;
	else
		return nth(list.rest, position-1);
}

console.log('element at position 2: '+nth(list, 2));
console.log('element at position 3: '+nth(list, 3));