const clock = document.querySelector("main");

function showClock() {
    /*
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    clock.innerHTML = `&#128345;${hour}:${minute}:${second}`;
    */
    const date = moment();
    clock.innerHTML = date.format("YYYY년 MM월 DD일 HH시 mm분 ss초 dddd");
}

showClock();
setInterval(showClock, 1000);
