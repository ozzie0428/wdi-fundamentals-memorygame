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
	const cards = [
		{ 
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
		{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
		},
		{ rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
			
		},
		{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"	
		}
	]
	const cardsInPlay = [];
	function checkForMatch() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		  } else {
			console.log("Sorry, try again.");
		  }	
		
	}
	
	function flipCard(cardId) {  
		checkForMatch();
		var cardOne = cards[cardId];
		cardsInPlay.push(cardOne);
		checkForMatch();
		// console.log("User flipped " + cardOne);
		
		var cardTwo = cards[cardId];
		cardsInPlay.push(cardTwo);
		checkForMatch();
		//  console.log("User flipped " + cardTwo);
	
		// console.log("User flipped " + cards[cardId].rank)
		// console.log(cards[cardId].cardImage);
		// console.log(cards[cardId].suit);
	
		 cardsInPlay.push(cards[cardId].rank);
		// console.log(cards[cardId].cardImage);
	}
	
	flipCard(0);
	 flipCard(2);
	 
	 function createBoard(){
		// // var cardElement = document.createElement('img');
		//  var cardElement = document.createElement("img");
		 var cardElement = document.createElement("img");
		 cardElement.setAttribute('src', src = "images/back.png");
		 document.getElementsByTagName("board clearfix").appendChild(cardElement);
		// for (var i = 0; i < cards.length; i++) {
		// 	console.log('index',i);
		// 	var cardElement = document.createElement("img");
		// 	console.log('cardelement',cardElement);

		// 	cardElement.setAttribute('src', src="images/back.png");
		// 	// console.log('cardelement',cardElement);
		// 	// cardElement.setAttribute(`img`, cardElement);
			
		// }
		
		
	 }

createBoard()
	 