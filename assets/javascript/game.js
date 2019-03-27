// List of words where user will play from
var wordDictionary = ["apple", "apricot", "avocado", "banana", "berry", "cantaloupe", "cherry", "citron", "citrus", "coconut", "date", "fig", "grape", "guava", "kiwi", "lemon", "lime", "mango", "melon", "mulberry", "nectarine", "orange", "papaya", "peach", "pear", "pineapple", "plum", "prune", "raisin" ,"raspberry", "tangerine"];

// Creating global variables
var wordGuessStr = "";
var wordGuessArray = [];
var problem = [];

// Variable to keep track of used words already
var usedWords = [];

// Picks a random word out of the list and sets as guess string
function getNewWord() {
    wordGuessStr = wordDictionary[Math.floor(Math.random()*wordDictionary.length)];
    console.log(wordGuessStr);
    usedWords.push(wordGuessStr);
};
getNewWord();

// Variable to keep track of score (how many words guessed)
var score = 0;
docScore = document.getElementById("score");
docScore.textContent = "Score: " + score;

// Creates word guess array to verify if the player's guess is correct
function createWordArray() {
    wordGuessArray = [];
    for (var i = 0; i < wordGuessStr.length; i++) {
        letter = wordGuessStr.charAt(i);
        wordGuessArray.push(letter);
    };
};
createWordArray();

// Create problem array and display to the player
function createProblemArray() {
    problem = [];
    for (var i=0; i < wordGuessStr.length; i++) {
        problem.push("_");
    };
    console.log(wordGuessStr)
    // Get problem div to display player's current word guesses
    prob = document.getElementById("problem");
    prob.textContent = problem;
};
createProblemArray();

// Variable to hold player's guesses
var playersGuesses = [];

// Get document alert div and update text to notify user
var docAlert = document.getElementById("alert");
function Alert(msg) {
    docAlert.textContent = msg;
};


// Get the player input
// Create event listener for player's keypress
window.addEventListener("keypress", myEventHandler, false);

// Input verification, ensure it's a key(letter)
function myEventHandler(e) {
    // console.log(e)
    if (e.code.includes("Key")){
        console.log("USER INPUT valid: the letter: " + e.key)
        // clear alert box
        Alert("")
        // if it passes verification, this will pass to player's guess to continue game
        playerGuessCorrect(e.key)
    } else {
        // Logs that user did not input a letter and notifies them
        console.error("USER INPUT invalid: NOT a letter " + e.key)
        Alert(e.key + " is not a letter")
    };
};

// Function to assess player's guess whether it's correct
function playerGuessCorrect(guess) {
    if (wordGuessArray.includes(guess)) {
        console.log("Player guessed a correct word!");
        guessedAlreadytest(guess);
    } else {
        console.error("Player guessed a the word incorrectly");
    };

};

// Function to determine if word has already been guessed
function guessedAlreadytest(guess) {
    if (playersGuesses.includes(guess)) {
        Alert("You already guessed " + guess);
        console.error("USER INPUT: Already guessed " + guess);
    } else {
        console.log("Player guessed new word correctly");
        playersGuesses.push(guess);
        console.log(playersGuesses)
        guessCorrect(guess);
    };
};

// Function to change word on screen if a player guesses the right word
function guessCorrect(word) {
    for (var i=0; i < wordGuessArray.length; i++) {
        if (word == wordGuessArray[i]) {
            problem[i] = word;
            prob.textContent = problem;
            checkWinCondition();
        };
    };
}

// Function to check if the player has won after a correct guess with change
function checkWinCondition() {
    if (problem.includes("_")) {

    } else {
        playerWin();
    };
};

// Function to complete tasks when a player guesses an entire word correctly
function playerWin() {
    alert("You guessed " + wordGuessStr + " correctly!");
    score = score + 1;
    docScore.textContent = "Score: " + score;
    resetGame();
};

// Function to retrieve a new word and reset variables before starting a game
function resetGame() {
    // If statement to check if there are more words to play
    if (usedWords.includes(wordGuessStr) && usedWords.length!=wordDictionary.length){
        getNewWord();
        createWordArray();
        createProblemArray();
        playersGuesses = [];
        console.log("USED WORDS " + usedWords);
    } else {
        console.log("No more words to play")
    };
};

