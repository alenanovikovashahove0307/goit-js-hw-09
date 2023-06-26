import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let timerID = null;

const refs = {
  datePicker: document.getElementById('datetime-picker'),
  startButton: document.querySelector('button[data-start]'),
  dataDaysEl: document.querySelector('span[data-days]'),
  dataHoursEl: document.querySelector('span[data-hours]'),
  dataMinutesEl: document.querySelector('span[data-minutes]'),
  dataSecondsEl: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  inline: true,
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      window.alert("Please choose a date in the future");
      refs.startButton.disabled = true;
    } else {
      refs.startButton.disabled = false;
    }
  },
};

flatpickr(refs.datePicker, options);

refs.startButton.addEventListener('click', function () {
  const selectedDate = flatpickr.parseDate(refs.datePicker.value, 'Y-m-d H:i');
  const currentTime = new Date().getTime();
  const selectedTime = selectedDate.getTime();
  const countdownTime = selectedTime - currentTime;

  startCountdown(countdownTime);
});

function startCountdown(time) {
    clearInterval(countdownInterval);

  countdownInterval = setInterval(function() {
    const remainingTime = convertMs(time);
    const formattedTime = formatTime(remainingTime);
    countdownDisplay.textContent = formattedTime;

    if (time <= 0) {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = "00:00:00:00";
    }

    time -= 1000;
  }, 1000);
}

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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function formatTime(time) {
  const { days, hours, minutes, seconds } = time;

  const formattedDays = addLeadingZero(days);
  const formattedHours = addLeadingZero(hours);
  const formattedMinutes = addLeadingZero(minutes);
  const formattedSeconds = addLeadingZero(seconds);

  return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}







