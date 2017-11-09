var auditWord = require('./wordInfo.js');
var randomizeWord = require('./logic.js');
var inquirer = require('inquirer');



var startGame = function() {
    gameover = false;
    found = false;
    guesses = [];
    tries = 7;
    var word = new randomizeWord();
    randomWord = word.wordSelect;
    console.log();
    console.log("LET'S PLAY SOME EPL HANGMAN!");
    console.log("\nThe current category is:", currentCategory);
    console.log("\nTries remaining:", tries);
    currentWord = new auditWord(randomWord);
    currentWord.createBlanks();
    console.log("\n" + currentWord.render() + "\n");
    userPrompt();
};



var playAgain = function() {
    if (gameover) {
        if (tries < 1) {
            console.log("\nBwahaha. You lose.\n");
        } else {
            console.log("\nCongratulatons! You won.\n");
        }
        inquirer.prompt([{
            type: "confirm",
            name: "again",
            message: "Would you like to play again?"
        }]).then(function(restart) {
            if (restart.again) {
                console.log("Let's do it!");
                startGame();
            } else {
                console.log("\nCome back and play again soon.\n");
            }
        });
    }
};



var userPrompt = function() {
    currentWord.wordFound();
    if (tries < 1 || found) {
        gameover = true;
        playAgain();
    } else {
        inquirer.prompt([{
            name: "guess",
            message: "Type a letter to guess the word."
        }]).then(function(answers) {
            if (guesses.find(function(item) {
                return item === answers.guess.toUpperCase();
            })) {
                console.log("\nTry again, that letter was already guessed.\n");
                userPrompt();
            } else {
                guesses.push(answers.guess.toUpperCase());
                console.log("\nGuessed letters: " + guesses);
                letFound = currentWord.check(answers.guess);
                console.log("\nGuesses left:", tries);
                console.log("\n" + currentWord.render() + "\n");
                userPrompt();
            }
        });
    }
};





startGame();