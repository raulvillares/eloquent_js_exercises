var range = function(start, end, step) {
	if ((step == null) || step == 0) step = 1;
	let numbers = [];
	if (step > 0)
		for (i = start; i <= end; i+=step)
			numbers.push(i);
	else
		for (i = start; i >= end; i+=step)
			numbers.push(i);
	return numbers;
}

function ArraySeq(array) {
	this.index = 0;
	this.values = array;
}

function RangeSeq(start, end) {
	return new ArraySeq(range(start, end, 1));
}

ArraySeq.prototype.start = function() {
	this.index = 0;
}

ArraySeq.prototype.moreElements = function() {
	return this.index < this.values.length;
}

ArraySeq.prototype.next = function() {
	var nextElement = this.values[this.index];
	++this.index;
	return nextElement;
}

var logFive = function(sequence) {
	sequence.start();
	while (sequence.moreElements() && sequence.index <= 4)
		console.log(sequence.next());
}

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));