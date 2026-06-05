function openSite(){
    document.getElementById("openScreen").style.display = "none";
    document.getElementById("main").style.display = "block";
}

// Wedding Date: 28 Nov 2026 - 6:00 PM
let weddingDate = new Date("Nov 28, 2026 18:00:00").getTime();

function updateCountdown(){
    let now = new Date().getTime();
    let distance = weddingDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
