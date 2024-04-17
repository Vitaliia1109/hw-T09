
// Initialize variables to store the interval ID and counter
let intervalID;
let counter = 0;

// Function to start the counter
let startCounter = function() {
    // Set interval to increment counter every 1000ms (1 second)
    intervalID = setInterval(() => { 
        counter++;
        console.log(counter); // Output the current count to the console
    }, 1000);
}

// Function to stop the counter
function stopCounter() {
    clearInterval(intervalID); // Clear the interval to stop counting
}

// Get references to the start and stop buttons in the HTML document
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// Add event listener to the start button to begin counting when clicked
startButton.addEventListener("click", startCounter);

// Add event listener to the stop button to stop counting when clicked
stopButton.addEventListener("click", stopCounter);
