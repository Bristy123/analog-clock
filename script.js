const deg = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
let hourHand = day.getHours() * 30;
let minuteHand = day.getMinutes() * deg;
let secondHand = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hourHand)+(minuteHand/12)}deg)`;
mn.style.transform = `rotateZ(${minuteHand}deg)`;
sc.style.transform = `rotateZ(${secondHand}deg)`;

})

