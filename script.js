
const hrHand = document.querySelector('.hrHand')
const minHand = document.querySelector('.minHand')
const secHand = document.querySelector('.secHand')

setInterval(()=>{
    let deg = 6;
    let currentTime = new Date();
    let sec = currentTime.getSeconds() * deg;
    let min = currentTime.getMinutes() * deg;
    let hr = currentTime.getHours() * 30;

    secHand.style.transform = `translateX(-30%) rotateZ(${sec}deg)`;
    minHand.style.transform = `translateX(-30%) rotateZ(${min}deg)`;
    hrHand.style.transform = `translateX(-30%) rotateZ(${hr + (min/12)}deg)`;
})
