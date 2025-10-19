function updateTime() {
  const timeElement = document.getElementById("user-time");
  timeElement.textContent = Date.now();
}

// Set once at load
updateTime();

// Optional: update every second
setInterval(updateTime, 1000);