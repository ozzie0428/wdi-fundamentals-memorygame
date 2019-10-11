/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardFour);*/
/*var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);
	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);
	if (cardsInPlay.length === 2) {
		alert("You found a match!"); 
	} else {
	(cardsInPlay[0] === cardsInPlay[2]);
		alert("Sorry, try again.");
	}*/
const cards = { 
	

};
const cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	  } else {
		console.log("Sorry, try again.");
	  }	
	
}
checkForMatch();
function flipCard(cardId) {
	var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);
	
	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);

	console.log("User flipped" + cards[cardId])

	cardsInPlay.push(cardId);
}
flipCard(0);
flipCard(2);




