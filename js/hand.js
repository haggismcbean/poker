function Hand(param) {
	this.cards = [
		param.pocket.cards[0],
		param.pocket.cards[1],
		param.flop.cards[0],
		param.flop.cards[1],
		param.flop.cards[2]
	];

	this.strength = this.getStrength();
}

Hand.prototype.getStrength = function() {
	var strength = 0;
	if(this.isOnePair()){
		strength = 1;
	}
}

Hand.prototype.rank = function() {
	
}

Hand.prototype.isFourKind = function(){

}

Hand.prototype.isFullHouse = function() {

}

Hand.prototype.isFlush = function() {

}

Hand.prototype.isStraight = function() {

}

Hand.prototype.isSet = function() {

}

Hand.prototype.isTwoPair = function() {
	this.sortRank();
	for(var i=2; i < (this.cards.length - 1); i++) {
		
	}
}

Hand.prototype.isOnePair = function() {
	this.sortRank();
	for(var i=0; i < (this.cards.length - 1); i++) {
		if(this.cards[i].rank == this.cards[i+1].rank){
			this.sortByOnePair(i, i+1);
			return true;
		}
	}
	return false;
}

Hand.prototype.sortByOnePair = function(card1Index, card2Index) {
	this.cards.move(card1Index, 0);
	this.cards.move(card2Index, 0);
}

Hand.prototype.sortRank = function() {
	this.cards.sort(function(a, b){
		if (a.rank < b.rank) {
			return 1;
		}
		if (a.rank > b.rank) {
			return -1;
		}
		return 0;
	});
}

Hand.prototype.sortSuit = function() {
	this.cards.sort(function(a, b){
		if (a.suit < b.suit) {
			return 1;
		}
		if (a.suit > b.suit) {
			return -1;
		}
		return 0;
	});
}

var deck = new Deck();

var card1 = deck.getCard({ rank: 0, suit: 2 });
var card2 = deck.getCard({ rank: 4, suit: 3 });

var pocket = new PocketCards({ card1: card1, card2: card2 });

var flop1 = deck.getCard({ rank: 1, suit: 0 });
var flop2 = deck.getCard({ rank: 3, suit: 2 });
var flop3 = deck.getCard({ rank: 3, suit: 1 });

var flop = new Flop({ card1: flop1, card2: flop2, card3: flop3 });

var hand = new Hand({ pocket: pocket, flop: flop });

console.log(JSON.stringify(hand, 0, 2));

console.log(hand.isOnePair());
