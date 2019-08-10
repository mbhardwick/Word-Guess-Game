//GLOBAL VARIABLES
//======================================================================
//Arrays and Variables for holding data
var wordBank = ["cardinals", "falcons", "ravens", "bills", "panthers", "bears", "bengals", "browns", "cowboys", "broncos", "lions", "packers", "texans", "colts", "jaguars", "chiefs", "rams", "dolphins", "vikings", "patriots",
"saints", "giants", "jets", "raiders", "eagles", "steelers", "chargers", "niners", "seahawks", "buccaneers", "titans", "redskins"];

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
    selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

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
        blanksAndSuccesses.push(" _ ");
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

//check letters 
function checkLetters(letter) {
    //check if letter exists in word
    var isLetter = false;

    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] === letter) {
            isLetter = true;
        }
            
    }
    //check where letter exists and populate array
    if(isLetter) {
        for (var i=0; i<numBlanks; i++) {
            if(selectedWord[i] === letter) {
                blanksAndSuccesses[i] = letter;
            }
        }

    }

    //wrong guess
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    //repeat guess
    
        console.log(blanksAndSuccesses);
    
}

function roundComplete() {
    console.log("Games Won: " + winCount + " | Games Lossed: " + lossCount + " | Guesses Remaining: " + guessesLeft);

    //Update HTML to reflect most recent stats
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("current").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("wrongLetters").innerHTML = wrongLetters.join("  ");

    //check if user won
    if (lettersinWord.toString() === blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won!");

        //update in HTML
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }
    //check if user lost
    else if (guessesLeft === 0) {

        lossCount++;
        alert("You lost!");

        //update HTML
        document.getElementById("lossCounter").innerHTML = lossCount;


        startGame();

    }


}
//MAIN PROCESS
//======================================================================
//Initiates the code the first time
startGame();

//Event keyclick
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete ();

    //Testing / Debugging
    console.log(letterGuessed);
}