var computeCentury = function(person) {
	return Math.ceil(person.died / 100);
}

var groupBy = function(array, computeGroup) {
	var mappedObject = {};
	array.forEach(function(element) {
		group = computeGroup(element);
		if (mappedObject[group] == undefined)
			mappedObject[group] = [];
		mappedObject[group].push(element);
	});
	return mappedObject;
}

var centuries = groupBy(ancestry, computeCentury);

var yearsLived = function(person) {
	return person.died - person.born;
}

var expectanciesPerCentury = function(centuries) {
	var expectancies = {};
	for(centuryNumber in centuries) {
		expectancies[centuryNumber] = roundOneDecimal(average(centuries[centuryNumber].map(yearsLived)));
	}
	return expectancies;
}

console.log(expectanciesPerCentury(centuries));
