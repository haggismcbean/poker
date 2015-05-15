function Hand(param) {
	this.cards = [
		param.card1,
		param.card2
	];
}

Hand.prototype.getStrength = function(flop) {
	alert("Getting hand strength");
}