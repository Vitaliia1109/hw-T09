let words = ["wombat", "koala", "alpaca", "kangaroo", "k00kaburra", "panda", "deer", "pelican", "rhinoceros", "racoon"];
function hasSixLetters(word) {
    return word.length === 6;
}


function myFilterFunction(words, callback) {
    
    let filteredWords = [];

    for (let word of words) {
        if (callback(word)) {
         filteredWords.push(word);
        }
    }
    return filteredWords;
}

let filteredWordsArray = myFilterFunction(words, hasSixLetters);
console.log(filteredWordsArray);