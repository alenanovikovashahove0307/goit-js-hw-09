import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
    inputEl: document.getElementById('datetime - picker'),
    startBtn: document.querySelector('[data-start]'),
    dayEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]')
}
refs.startBtn.setAttribute(`disabled`, true);
const currentDate = new Date();

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
  function faddLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function onScreenLoad(object) {
    days.textContent = padStart(object.days);
    hours.textContent = padStart(object.hours);
    minutes.textContent = padStart(object.minutes);
    seconds.textContent = padStart(object.seconds);
};
  function counter(firstDate){ 
    // const currentDate = new Date();
    const countdownTime = convertTime(firstDate.getTime() - currentDate.getTime());
    console.log(countdownTime);
    onScreenLoad(countdownTime);
    if ((countdownTime.days === 0 && countdownTime.hours === 0 && countdownTime.minutes === 0 && countdownTime.seconds ===0)){
        clearInterval(timerInterval);
        days.textContent = faddLeadingZero(0);
        hours.textContent = faddLeadingZero(0);
        minutes.textContent = faddLeadingZero(0);
        seconds.textContent = faddLeadingZero(0);
    }
}


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      const firstDate = selectedDates[0];
    if (firstDate < currentDate) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute(`disabled`, true);
      console.log(firstDate.getTime());
      console.log(currentDate.getTime());
      startBtn.addEventListener('click', startCounter);
      
      function startCounter() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => counter(firstDate), 1000);
        startBtn.setAttribute(`disabled`, true);
      }
    }
  },
};
flatpickr('#datetime-picker', 'options');
