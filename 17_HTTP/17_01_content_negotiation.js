function authorInformationRequest(type) {
	var request = new XMLHttpRequest();
	request.open("GET", "http://eloquentjavascript.net/author", false);
	if(type != undefined) request.setRequestHeader("Accept", type);
	request.send(null);
	console.log(request.status, request.statusText);
	console.log(request.getResponseHeader("content-type"));
	console.log(request.responseText);
}

authorInformationRequest("text/plain");
authorInformationRequest("text/html");
authorInformationRequest("application/json");
authorInformationRequest("application/rainbows+unicorns");