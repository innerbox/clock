const clock = document.querySelector("main");

function showClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    clock.innerHTML = `&#128345;${hour}:${minute}:${second}`;
}

showClock();
setInterval(showClock, 1000);