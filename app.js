function displayDateTime() {
    // Create a new Date object
    let now = new Date();

    // Extract date and time components
    let time = now.toLocaleTimeString(); // Format: HH:MM:SS AM/PM
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek = days[now.getDay()];

    // Display in the HTML elements with respective IDs
    document.getElementById('currentDay').innerText = dayOfWeek;
    document.getElementById('currentTimeUTC').innerText = time;

    // Update every second (1000 milliseconds)
    setTimeout(displayDateTime, 1000);
}
displayDateTime();