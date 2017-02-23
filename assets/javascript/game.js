

var library =
["balloon","hangman","saturn", "scorpio"];

var word= "";
var answerArray = [];


function init(){
word = library[Math.floor(Math.random()*library.length)];

answerArray = [];
for(var i=0;i<word.length;i++){

	answerArray[i] = "_";
}
document.getElementById("answer").innerHTML=answerArray.join(" ");
document.getElementById("message").innerHTML= "Type a letter then press guess or quit to stop playing"
} //close init()


function guessOne(){
	var guess = document.getElementById("guess").value;
	var showThisMessage = "";
	var lettersAlreadyGuessed =[];

	if(guess.length !==1){
		showThisMessage = "Please enter only one letter";
	}
	else {
		for (var i=0;i<word.length;i++){
			if(word[i] === guess){
				answerArray[i] = guess;
				showThisMessage = "Yes! " + guess + " is in the answer";
			}

			// start new code
			//else if{
			//	for(var j;j<word.length;i++){
					
			//	if(word[i]!==guess){
			//	lettersAlreadyGuessed[i] = guess;
			//		}
			//	}
			//}
			// stop new code
		
		}





	var remaining_letters = answerArray.length;
	for(var i=0;i<answerArray.length;i++){
		if(answerArray[i] !== "_"){
			remaining_letters -= 1;
		}
	} 

	if (remaining_letters === 0){
		showThisMessage = "Yes , you guessed the word !";
	}

	if (showThisMessage === ""){
		showThisMessage = "Sorry, no " + guess + " in the word";
	}


}// else close
	
	//document.getElementById("message1").innerHTML = lettersAlreadyGuessed;
	
	document.getElementById("answer").innerHTML = answerArray.join(" ");
	document.getElementById("message").innerHTML = showThisMessage;
}// guessOne() close

function quit(){
	if(word.length === answerArray.length){
	showThisMessage = "Thanks for playing ! ";
	init();
	}
	document.getElementById("message").innerHTML = showThisMessage;
	
	}





