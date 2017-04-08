var ageDifference = function(person) {
	if (byName[person.mother] == null)
		return 0;
	else
		return person.born - byName[person.mother].born;
}

var mothersAge = function() {
	return ancestry.map(ageDifference).filter(function(age) { return age > 0; });
}

console.log(roundOneDecimal(average(mothersAge())));