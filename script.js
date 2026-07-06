function updateTime() {

    const now = new Date();

    document.getElementById("time").textContent =
        now.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        });

}

updateTime();

setInterval(updateTime,1000);


fetch("https://api.open-meteo.com/v1/forecast?latitude=30.5708&longitude=-97.4094&current=temperature_2m&temperature_unit=fahrenheit")

.then(response => response.json())

.then(data => {

document.getElementById("weather").textContent =
Math.round(data.current.temperature_2m) + "°F";

})

.catch(() => {

document.getElementById("weather").textContent = "";

});
