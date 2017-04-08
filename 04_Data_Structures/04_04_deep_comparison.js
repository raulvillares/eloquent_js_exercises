// by a historical accident, typeof null also produces "object".
var strictType = function(x) {
	if (typeof x == null)
		return null;
	else
		return typeof x;
}

var sameType = function(x,y) {
	return strictType(x) == strictType(y);
}

var deepEqual = function(element1, element2) {
	if (sameType)
		if (strictType(element1) == 'object')
			for (subelement in element1)
				return true && deepEqual(element1[subelement], element2[subelement]);
		else
			return element1 === element2;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true