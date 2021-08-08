const clock = document.querySelector("h2#clock");
const calendar = document.querySelector("h4#currentDate")




function getClock() {
    const toDay = new Date();
    const hours = String(toDay.getHours()).padStart(2,"0");
    const minutes = String(toDay.getMinutes()).padStart(2,"0");
    const seconds = String(toDay.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    const year = String(toDay.getFullYear()).padStart(2,"0");
    const month = String(toDay.getMonth()).padStart(2,"0");
    const date = String(toDay.getDate()).padStart(2,"0");
    calendar.innerText = `📅 ${year}.${month}.${date}`;
}

getClock();
setInterval(getClock, 1000);