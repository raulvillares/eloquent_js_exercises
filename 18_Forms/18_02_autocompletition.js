var terms = [];
for (var name in window) terms.push(name);
	
function getSuggestions(text) {
	if (text.trim().length > 0)
		return terms.filter(function(term) {
			return term.toUpperCase().startsWith(text.toUpperCase());
		});
	else
		return [];
}

function selectSuggestion(event) {
	document.getElementById("suggestions").textContent = "";
	document.getElementById("field").value = event.target.textContent;
}

var field = document.getElementById("field");
field.addEventListener("input", function() {
	var suggestionsElement = document.getElementById("suggestions");
	suggestionsElement.textContent = "";
	var suggestions = getSuggestions(event.target.value);
	suggestions.forEach(function(suggestion) {
		var suggestionNode = document.createElement("div");
		suggestionNode.textContent = suggestion;
		suggestionNode.addEventListener("click", selectSuggestion, false);
		suggestionsElement.appendChild(suggestionNode);
	});
  }
);
