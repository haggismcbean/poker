function Hand(param) {
	this.cards = [
		param.card1,
		param.card2
	];
}

Hand.prototype.getStrength = function(flop) {
	var ahead = 0;
	var behind = 0;
	var tied = 0;

	var ourRank = this.rank(this, flop);
}

Hand.prototype.rank = function(hand, flop) {
	alert('here');
}

Hand.prototype.isFourKind = function(hand, flop){

}

Hand.prototype.isFullHouse = function(hand, flop) {

}

Hand.prototype.isFlush = function(hand, flop) {

}

Hand.prototype.isStraight = function(hand, flop) {

}

Hand.prototype.isSet = function(hand, flop) {

}

Hand.prototype.isTwoPair = function(hand, flop) {

}

Hand.prototype.isOnePair = function(hand, flop) {

}

var deck = new Deck();

var card1 = deck.getCard({ rank: 1, suit: 2 });
var card2 = deck.getCard({ rank: 1, suit: 3 });

var hand = new Hand({ card1: card1, card2: card2 });

var flop1 = deck.getCard({ rank: 1, suit: 0 });
var flop2 = deck.getCard({ rank: 2, suit: 1 });
var flop3 = deck.getCard({ rank: 3, suit: 1 });

var flop = new Flop({ card1: flop1, card2: flop2, card3: flop3 });

hand.getStrength(hand.cards, flop.cards)

console.log(JSON.stringify(hand));

console.log(JSON.stringify(flop));