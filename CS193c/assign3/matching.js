
var cards = ["1clubs", "1hearts", "2clubs", "2hearts", "3clubs","3hearts"]
var faceUp = new Array()

//Method retrieved from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(){
	for (var i  = cards.length-1 ; i>0; i--){
		j =  getRandomInt(i)
		var temp = cards[i]
		cards[i]=cards[j]
		cards[j]=temp
	}
	//console.log(cards)
}

function dealCards(){
	faceUp = []
	shuffle()
	var newInner = ""
	for (var i = 0; i<cards.length; i++){
		newInner+= '<img src= "back.png" id= "' + cards[i] + '" alt="card" onclick = "flipFront(this)" >';
	}
	document.getElementById("game").innerHTML = newInner
}
function clear(){
	document.getElementById(faceUp[0]).setAttribute("src", "clear.png")
	document.getElementById(faceUp[1]).setAttribute("src", "clear.png")	
	faceUp = []
}

function flipFront(card){
	if(card.getAttribute("src") == "back.png" && faceUp.length<2){
		console.log(card.getAttribute("id"))
		card.setAttribute("src", card.getAttribute("id") + ".png");
		faceUp.push(card.getAttribute("id"))
		
	}
	if(faceUp.length == 2 && faceUp[0][0]==faceUp[1][0]){
		setTimeout(clear, 500);
	}else{
		setTimeout(() => {flipBack(card)}, 1500);
	}
} 

function flipBack(card){	
	if(card.getAttribute("src") != "back.png"  && card.getAttribute("src") != "clear.png" ){
		
		if(! (faceUp.length == 2 && faceUp[0][0]==faceUp[1][0])){
			card.setAttribute("src", "back.png");
			faceUp = faceUp.filter(data => data!= card.getAttribute("id"))
		}
	}
	
	//console.log(faceUp)
}

dealCards()
document.getElementById("restartButton").addEventListener("click", dealCards);