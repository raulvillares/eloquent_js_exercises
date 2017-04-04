var countChar = function(text, character) {
	let numberOfCharacters = 0;
	for(i = 0; i < text.length; ++i)
		if (text.charAt(i) == character) ++numberOfCharacters;
	return numberOfCharacters;
}

countBs = function(text) {
	return countChar(text, 'B');
}

console.log('Number of uppercase B character in string Baby cant be blessed :', countBs('Baby cant be blessed'));
console.log('Number of uppercase B character in string Baby cant Be Blessed :', countBs('Baby cant Be Blessed'));
console.log('Number of uppercase B character in string baby cant be blessed :', countBs('baby cant be blessed'));