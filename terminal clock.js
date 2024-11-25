function displayClock() {
    const now = new Date(); // Get the current date and time
    const hours = String(now.getHours()).padStart(2, '0'); // Format hours
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Format minutes
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Format seconds          

    // Clear the terminal and display the current time
    console.clear(); // This clears the previous output
    console.log(`${hours}:${minutes}:${seconds}`); // Display the current time
}

// Update the clock every second
setInterval(displayClock, 1000);