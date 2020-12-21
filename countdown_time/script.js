
const newYear = "1 Jan 2021";
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const mins = document.querySelector('#mins');
const second = document.querySelector('#seconds');

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    
    const totalSeconds = (newYearDate - currentDate) / 1000;

    const day = Math.floor(totalSeconds / 3600 / 24);
    var hour = Math.floor(totalSeconds / 3600) % 24;
    var minute = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds % 60);

    days.innerHTML = day;
    hours.innerHTML = formateTime(hour);
    mins.innerHTML = formateTime(minute);
    second.innerHTML = formateTime(seconds);


}

function formateTime(time){
    console.log(time);
    return time < 10 ? `0${time}` : time;
    
}

countdown();

setInterval(countdown, 1000);