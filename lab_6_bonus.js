
var integerOut = randomNumber();
var promptGuess = prompt();

function randomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}

if (parseInt(promptGuess) === integerOut){
	document.write("correct");

	} else if (parseInt(promptGuess) !== integerOut){
	document.write("nope");	
	}

document.write(" the random number was: " + integerOut);
