function Deck() {
	var _this = this;
	this.cards = [];
	
	populateDeck();

	function populateDeck() {
		for (var suit = 0; suit < 4; suit++) {
			setRanks(suit);
		}
	}

	function setRanks(suit) {
		for (var rank = 0; rank < 13; rank++) {
			var card = new Card({ suit: suit, rank: rank });
			_this.cards.push(card);
		}
	}
}

var deck = new Deck();