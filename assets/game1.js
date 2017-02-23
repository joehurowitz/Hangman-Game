var library =
["balloon","hangman","saturn", "scorpio"];

var word= "";
var answerArray = [];


document.onkeyup = function(event){
	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	if (letter === "i"){
		init();
	}

	//if (letter === "g"){
		guessOne();
	//}
} //close event

function init(){
word = library[Math.floor(Math.random()*library.length)];

answerArray = [];
for(var i=0;i<word.length;i++){

	answerArray[i] = "_";
}
document.getElementById("answer").innerHTML=answerArray.join(" ");
document.getElementById("message").innerHTML= "Type a letter then press guess or quit to stop playing";

} //close init()

function guessOne(){

	var guess = event.key;
	var showThisMessage = "";
	var lettersAlreadyGuessed =[];
	showThisMessage = "Enter a letter : "
	if(guess.length !==1){
		showThisMessage = "Please enter only one letter";
	}
	else {
		for (var i=0;i<word.length;i++){
			if(word[i] === guess){
				answerArray[i] = guess;
				showThisMessage = "Yes! " + guess + " is in the answer";
			}
		
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
	} //close guesOne(); 


function quit(){
	if(word.length === answerArray.length){
	showThisMessage = "Thanks for playing ! ";
	init();
	}
	document.getElementById("message").innerHTML = showThisMessage;
	
	}



