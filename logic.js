// choosing random word


// possible words

var wordBank = [
    ["arsenal", "manchester city", "manchester united", "tottenham", "chelsea", "liverpool", "burnley", "brighton", "watford", "huddersfield", "newcastle", "leicester city", "southampton", "stoke", "everton", "west brom", "bournemouth", "west ham", "swansea city", "crystal palace"],
    ["wenger", "guardiola", "mourinho", "pochettino", "conte", "klopp", "dyche", "hughton", "silva", "wagner", "benitez", "puel", "pellegrino", "hughes", "unsworth", "pulis", "howe", "moyes", "clement", "hodgson"],
    ["mertesacker", "francis", "bruno", "heaton", "cahill", "puncheon", "jagielka", "smith", "morgan", "henderson", "kompany", "carrick", "lascelles", "davis", "shawcross", "britton", "lloris", "deeney", "evans", "noble"],
    ["arsenal", "manchester city", "manchester united", "tottenham", "chelsea", "liverpool", "burnley", "brighton", "watford", "huddersfield", "newcastle", "leicester city", "southampton", "stoke", "everton", "west brom", "bournemouth", "west ham", "swansea city", "crystal palace", "wenger", "guardiola", "mourinho", "pochettino", "conte", "klopp", "dyche", "hughton", "silva", "wagner", "benitez", "puel", "pellegrino", "hughes", "unsworth", "pulis", "howe", "moyes", "clement", "hodgson", "mertesacker", "francis", "bruno", "heaton", "cahill", "puncheon", "jagielka", "smith", "morgan", "henderson", "kompany", "carrick", "lascelles", "davis", "shawcross", "britton", "lloris", "deeney", "evans", "noble"]
];

//choose a category
var randomCategory = function() {
    if (randomizeWord.categorySelect === wordBank[0]) {
        currentCategory = "Team";
    } else if (randomizeWord.chosenCategory === wordBank[1]) {
        currentCategory = "Character";
    } else if (randomizeWord.chosenCategory === wordBank[2]) {
        currentCategory = "Captain";
    } else if (randomizeWord.chosenCategory === wordBank[3]) {
        currentCategory = "Wildcard";
    }
};

//choose the word at random based on the category
var randomizeWord = function(categorySelect, wordSelect) {
    this.categorySelect = wordBank[Math.floor(Math.random() * wordBank.length)];
    this.wordSelect = this.categorySelect[Math.floor(Math.random() * this.categorySelect.length)];
    if (this.categorySelect === wordBank[0]) {
        currentCategory = "Team";
    } else if (this.categorySelect === wordBank[1]) {
        currentCategory = "Manager";
    } else if (this.categorySelect === wordBank[2]) {
        currentCategory = "Captain";
    } else if (this.categorySelect === wordBank[3]) {
        currentCategory = "Wildcard";
    }
};



module.exports = randomizeWord;