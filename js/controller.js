//Psuedocode

//init deck
// var deck = new Deck();

//init range
// var range = new Range({ percent: 10 });
// this gets a bunch of pocket cards (the right amount)
// 		this is done by getting a sample of flops, calculating each possible pockets strength for that flop, then sorting all pockets in order of strength.


//init flop
//remove dead cards from range
//calculate hand strengths (current + prob(future) or whatever this is...)
//		this is done by getting a sample of possible turns and rivers, calculating each possible pockets strength for those turns and rivers, then sorting all pockets in order of strength.

//sort range by strength
//find break points
//give action for specific hand



/*
	Current plan needs five- and seven- card hand strengths, ability to simulate random card draws. seperate Hand and PocketCards classes seem fine.
*/