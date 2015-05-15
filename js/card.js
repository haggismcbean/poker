function Card(param) {
	this.suit = param.suit;
	this.rank = param.rank;
}

Card.prototype.toString = function() {
	alert("Card as a string");
}