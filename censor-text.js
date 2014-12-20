var censoredWords = ["vaffanculo", "stronzo", "dio", "madonna", "coglione", "merda", "culo", "puttana", "troia"];

var customCensoredWords = [];

function censor(inStr) {
    for (var w in censoredWords) {
        inStr = inStr.replace(censoredWords[w], "***");
    }
    for (var w in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[w], "***");
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