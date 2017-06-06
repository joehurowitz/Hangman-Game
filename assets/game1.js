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
document.getElementById("message").innerHTML= "Type a letter or quit to stop playing";

}; //close init()

function guessOne(){

	var guess = event.key;
	var showThisMessage = "";
	var lettersAlreadyGuessed =[];
	var losses=0;
	var wins=0;
	showThisMessage = "Please enter another letter : ";

	if(guess.length !==1){
		showThisMessage = "Please enter only one letter";
	}

	else {
		for (var i=0;i<word.length;i++){
			if(word[i] === guess){
				lettersAlreadyGuessed.push(guess);
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
			lettersAlreadyGuessed.push(guess);
			showThisMessage = "Sorry, no " + guess + " in the word";
		}
		
		if(lettersAlreadyGuessed.length >10){
		showThisMessage = "Sorry you lost this game";
		losses +=1;
		quit();

		}




	}// else close
	
	
	document.getElementById("answer").innerHTML = answerArray.join(" ");
	document.getElementById("message").innerHTML = showThisMessage;
	}; //close guesOne(); 


function quit(){
	showThisMessage = "Thanks for playing ! ";
	document.getElementById("text-box").value = " ";
	init();
	

	//document.getElementById("message").innerHTML = showThisMessage;
	
	};



