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

Deck.prototype.getCard = function(param) {
	for(var i=0; i < this.cards.length; i++){
		if(this.cards[i].suit == param.suit){
			if(this.cards[i].rank == param.rank){
				return this.cards[i];
			}
		}
	}
}