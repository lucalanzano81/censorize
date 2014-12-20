var censoredWords = ["vaffanculo", "stronzo", "dio", "madonna", "coglione", "merda", "culo", "puttana", "troia"];

var customCensoredWords = [];

function censor(inStr) {
    for (inStr in censoredWords) {
        inStr = inStr.replace(censoredWords[inStr], "***");
    }
    for (inStr in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[inStr], "***");
    }

    return inStr;
}

function addCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}


exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;