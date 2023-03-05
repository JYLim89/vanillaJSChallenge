const deg = 6;
const hr = document.getElementById("analog-clock__hr");
const mn = document.getElementById("analog-clock__mn");
const sc = document.getElementById("analog-clock__sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    console.log(hr);

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

const toDay = document.querySelector('#today-date');
const clock = document.querySelector('#digital-clock');

function getClock() {
    const date = new Date();
    
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    const years = String(date.getFullYear()).padStart(4, "0");
    const months = String(date.getMonth()+1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");
    toDay.innerText = `${years}. ${months}. ${days}`;
}

getClock();
setInterval(getClock, 1000);

