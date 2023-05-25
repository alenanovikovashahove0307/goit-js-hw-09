import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let timerID = null;

const refs = {
  inputDate: document.getElementById('datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),

  dataDaysEl: document.querySelector('span[data-days]'),
  dataHoursEl: document.querySelector('span[data-hours]'),
  dataMinutesEl: document.querySelector('span[data-minutes]'),
  dataSecondsEl: document.querySelector('span[data-seconds]'),
};

const optionsFlatpickr = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date().getTime();
    const timerInSeconds = selectedDates[0] - currentDate;

    if (timerInSeconds <= 0) {
      
      Notify.failure('Please choose a date in the future');
      return null;
    }

    const objTimer = convertMs(timerInSeconds);

    renderTimer(objTimer);

    refs.btnStart.disabled = false;
    refs.inputDate.disabled = true;
  },
};

refs.btnStart.disabled = true;
refs.btnStart.addEventListener('click', onClickStart);

const objFlatpickr = flatpickr(refs.inputDate, optionsFlatpickr);


function onClickStart() {
  refs.btnStart.disabled = true;

  const selectTime = objFlatpickr.latestSelectedDateObj.getTime();
  
  timerID = setInterval(startTime, 1000, selectTime);
}

function startTime(selectTime) {
  let currentDate = selectTime - new Date().getTime();

  if (currentDate <= 0) {
    
    clearInterval(timerID);
    renderTimer({ days: '00', hours: '00', minutes: '00', seconds: '00' });
    refs.btnStart.disabled = true;
    refs.inputDate.disabled = false;
    return;
  }

  const objTimer = convertMs(currentDate);
  renderTimer(objTimer);
}


function renderTimer(objTimer) {
  refs.dataDaysEl.innerText = String(objTimer.days).padStart(2, 0);
  refs.dataHoursEl.innerText = String(objTimer.hours).padStart(2, 0);
  refs.dataMinutesEl.innerText = String(objTimer.minutes).padStart(2, 0);
  refs.dataSecondsEl.innerText = String(objTimer.seconds).padStart(2, 0);
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