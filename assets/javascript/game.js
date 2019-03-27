// List of words where user will play from
var wordDictionary = ["apple", "banana", "pear"];

// Picks a random word out of the list
var wordGuessStr = wordDictionary[Math.floor(Math.random()*wordDictionary.length)];
log(wordGuessStr);

// Creates word guess array to verify if the player's guess is correct
var wordGuessArray = [];
for (var i = 0; i < wordGuessStr.length; i++) {
    // console.log(wordGuessStr.charAt(i));
    letter = wordGuessStr.charAt(i);
    wordGuessArray.push(letter);
    // log("wordGuessArray = " + wordGuessArray)
};

// Create problem array and display to the player
var problem = []
for (var i=0; i < wordGuessStr.length; i++) {
    problem.push("_");
};
// Get problem div to display player's current word guesses
prob = document.getElementById("problem");
prob.textContent = problem;

// Variable to hold player's guesses
var playersGuesses = [];


// Get document alert div and update text to notify user
var docAlert = document.getElementById("alert");
function Alert(msg) {
    docAlert.textContent = msg;
};

// Function to log something or log an error
function log(e) {
    console.log(e);
};

function logError(e) {
    console.error(e)
};


// Get the player input
// Create event listener for player's keypress
window.addEventListener("keypress", myEventHandler, false);

// Input verification, ensure it's a key(letter)
function myEventHandler(e) {
    // log(e)
    if (e.code.includes("Key")){
        log("USER INPUT valid: the letter: " + e.key)
        // clear alert box
        Alert("")
        // if it passes verification, this will pass to player's guess to continue game
        playerGuessCorrect(e.key)
    } else {
        // Logs that user did not input a letter and notifies them
        logError("USER INPUT invalid: NOT a letter " + e.key)
        Alert(e.key + " is not a letter")
    };
};

// Function to assess player's guess whether it's correct
function playerGuessCorrect(guess) {
    if (wordGuessArray.includes(guess)) {
        log("Player guessed a correct word!");
        guessedAlreadytest(guess);
    } else {
        logError("Player guessed a the word incorrectly");
    };

};


// Function to determine if word has already been guessed
function guessedAlreadytest(guess) {
    if (playersGuesses.includes(guess)) {
        Alert("You already guessed " + guess);
        logError("USER INPUT: Already guessed " + guess);
    } else {
        log("Player guessed new word correctly");
        playersGuesses.push(guess);
        log(playersGuesses)
    };
};


// for (var i=0;i < 10; i++) {
//     console.log(i);
// }