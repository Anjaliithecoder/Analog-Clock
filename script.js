// Get clock hands by ID
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('min');
const secondHand = document.getElementById('sec');

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate rotation degrees
    const hourDeg = (360 / 12) * (hours % 12) + (30 / 60) * minutes;
    const minuteDeg = (360 / 60) * minutes + (6 / 60) * seconds;
    const secondDeg = (360 / 60) * seconds;

    // Apply rotation to hands
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();
