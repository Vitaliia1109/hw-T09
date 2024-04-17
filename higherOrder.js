// Array containing words
let words = ["wombat", "koala", "alpaca", "kangaroo", "k00kaburra", "panda", "deer", "pelican", "rhinoceros", "racoon"];

// Function to check if a word has six letters
function hasSixLetters(word) {
    return word.length === 6; // Returns true if the word has six letters, otherwise false
}

// Custom filter function to filter words based on a callback function
function myFilterFunction(words, callback) {
    let filteredWords = []; // Array to store filtered words

    // Iterate through each word in the input array
    for (let word of words) {
        // Check if the callback function returns true for the current word
        if (callback(word)) {
            filteredWords.push(word); // Add the word to the filteredWords array if the callback returns true
        }
    }
    return filteredWords; // Return the array of filtered words
}

// Call the custom filter function with the words array and the hasSixLetters callback function
let filteredWordsArray = myFilterFunction(words, hasSixLetters);

// Output the filtered words array to the console
console.log(filteredWordsArray);