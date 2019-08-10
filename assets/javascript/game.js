//GLOBAL VARIABLES
//======================================================================
//Arrays and Variables for holding data
var wordOptions = ["sophia" + "petrillo", "rose " + "nylan", "blanche " + "devereaux", "dorothy " + "zbornak", "cheesecake", "miami", "southern " + "bell", "sicily"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 12;



//FUNCTIONS
//======================================================================
//Start
//select random word
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

    //breakdown word into individual letters
    lettersinWord = selectedWord.split("");

    //blanks required for word ----auto?
    numBlanks = lettersinWord.length;

    //Reset
    guessesLeft = 12;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Populate blanks and successes with right number of blanks
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    //Change HTML to reflect round conditions
    document.getElementById("current").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;
    
    //Testing / Debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

//MAIN PROCESS
//======================================================================
//Initiates the code the first time
startGame();

//Event keyclick
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    //Testing / Debugging
    console.log(letterGuessed);
}