function updateCountdown() {
    const newYear = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`).getTime();
    const now = new Date().getTime();
    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = `${days}:${hours}:${minutes}:${seconds}`;
}

function updateEvents() {
    const today = new Date();

    // Shortest Day
    const shortestDay = new Date(`December 21, ${today.getFullYear()} 00:00:00`);
    document.getElementById("shortest-day").innerText = shortestDay.toDateString();

    // Christmas
    const christmas = new Date(`December 25, ${today.getFullYear()} 00:00:00`);
    document.getElementById("christmas").innerText = christmas.toDateString();

    // New Year
    const newYear = new Date(`January 1, ${today.getFullYear() + 1} 00:00:00`);
    document.getElementById("new-year").innerText = newYear.toDateString();
}

function previewMessage() {
    alert("Happy New Year!");
}

// Update timers and events on load
updateEvents();
setInterval(updateCountdown, 1000);
