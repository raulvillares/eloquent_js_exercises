function executeCode() {
	var codeFunction = new Function("", document.getElementById("code").value);
	var message = "";
	try {
		message = codeFunction();
	} catch (e) {
		message = "Error: "+e;
	}
	var textNode = document.createTextNode(message+"\n");
	document.getElementById("output").appendChild(textNode);
}