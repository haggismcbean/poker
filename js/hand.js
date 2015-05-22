function Hand(param) {
	this.cards = [
		param.pocket.cards[0],
		param.pocket.cards[1],
		param.flop.cards[0],
		param.flop.cards[1],
		param.flop.cards[2]
	];

	this.NUMBERCARDS = this.cards.length;

	this.strength = this.getStrength();
}

Hand.prototype.getStrength = function() {
	var strength = 0;

	//test for flush
	this.sortBySuit(this.cards);
	this.checkFlush(this.cards);

	//test for straight
	this.sortByRank(this.cards);
	this.checkStraight(this.cards);

	//test for everything else
	var matches = this.getMatches(this.cards);

	if(matches.length === 1){
		this.getSingleMatchesStrength(matches);
	}

	if(matches.length === 2){
		this.getDoubleMatchesStrength(matches);
	}
}

Hand.prototype.checkFlush = function(cards) {
	for(var i=1; i < cards.length; i++){
		if(cards[i].suit !== cards[0].suit){
			return;
		}
	}
	alert('flush');
	return;
}

Hand.prototype.checkStraight = function(cards) { 
	console.log(JSON.stringify(cards, 0, 2));
	for(var i=0; i < (cards.length - 1); i++){
		if(cards[i].rank - 1 != cards[i+1].rank){
			//FIXME: NEED EDGE CASE.
			return
		}
	}
	alert('straight');
	return;
}

Hand.prototype.getDoubleMatchesStrength = function(matches) {
	if(matches[0].length === 3 || matches[1].length === 3){
		alert('full house');
		return;
	}
	alert('two pair');
	return;
}

Hand.prototype.getSingleMatchesStrength = function(matches) {
	if(matches[0].length === 2){
		alert('one pair');
		return;
	}
	if(matches[0].length === 3){
		alert('set');
		return;
	}
	if(matches[0].length === 4){
		alert('four of a kind');
		return;
	}
}

Hand.prototype.getMatches = function(cards) {
	var unsplitMatches = this.findMatches(this.cards);
	if(unsplitMatches.length === 0){
		alert('no pairs')
		this.strength = 0;
		return;
	}
	
	return this.splitMatches(unsplitMatches);
}

Hand.prototype.findMatches = function(cards) {
	var matches = [];
	for(var i=0; i < (cards.length - 1); i++) {
		if(cards[i].rank == cards[i+1].rank){
			if(matches.indexOf(cards[i]) < 0){
				matches.push(cards[i]);
			}
			matches.push(cards[i+1]);
		}
	}
	return matches;
}

Hand.prototype.splitMatches = function(matches) {
	var firstSet = [matches[0], matches[1]];
	var secondSet = [];
	for(var i=2; i < matches.length; i++){
		if(matches[i].rank == matches[0].rank) {
			firstSet.push(matches[i]);
		} else {
			secondSet.push(matches[i]);
		}
	}
	var splitMatches = [firstSet];
	if (secondSet.length > 0) {
		splitMatches.push(secondSet);
	}
	return splitMatches;
}

Hand.prototype.sortByRank = function(cards) {
	cards.sort(function(a, b) {
		if (a.rank < b.rank) {
			return 1;
		}
		if (a.rank > b.rank) {
			return -1;
		}
		return 0;
	});
}

Hand.prototype.sortBySuit = function(cards) {
	cards.sort(function(a, b){
		if (a.suit < b.suit) {
			return 1;
		}
		if (a.suit > b.suit) {
			return -1;
		}
		return 0;
	});
}

// Dev code:

var deck = new Deck();

var card1 = deck.getCard({ rank: 1, suit: 2 });
var card2 = deck.getCard({ rank: 2, suit: 2 });

var pocket = new PocketCards({ card1: card1, card2: card2 });

var flop1 = deck.getCard({ rank: 4, suit: 2 });
var flop2 = deck.getCard({ rank: 3, suit: 1 });
var flop3 = deck.getCard({ rank: 5, suit: 2 });

var flop = new Flop({ card1: flop1, card2: flop2, card3: flop3 });

var hand = new Hand({ pocket: pocket, flop: flop });
