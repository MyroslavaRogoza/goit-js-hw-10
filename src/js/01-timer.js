// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const timer = document.querySelector('.timer');
const daysRemaining = document.querySelector('span[data-days]');
const hoursRemaining = document.querySelector('span[data-hours]');
const minutesRemaining = document.querySelector('span[data-minutes]');
const secondsRemaining = document.querySelector('span[data-seconds]');


btnStart.classList.add('page-start-btn');


btnStart.setAttribute('disabled', 'true');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // userSelectedDate = selectedDates[0];
    if (selectedDates[0] > new Date()) {
      btnStart.removeAttribute('disabled');
      userSelectedDate = selectedDates[0];
    } else {
      window.alert('Please choose a date in the future');
      btnStart.setAttribute('disabled', 'true');
    }
    // return (userSelectedDate = selectedDates[0]);
  },
};

flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days =  Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let intervalId;

function startTimer(finaltime) {
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = userSelectedDate - currentTime;
    if (diff <= 0) {
      stopTimer();
    }
    const timeObj = convertMs(diff);
    tickTimer(timeObj);

    // return timeObj;
  }, 1000);
}

btnStart.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  startTimer();
  input.disabled = true;
  btnStart.setAttribute('disabled', 'true');
}

function stopTimer() {
  clearInterval(intervalId);
}

function tickTimer({ days, hours, minutes, seconds }) {
  daysRemaining.textContent = `${addPad(days)}`;
  hoursRemaining.textContent = `${addPad(hours)}`;
  minutesRemaining.textContent = `${addPad(minutes)}`;
  secondsRemaining.textContent = `${addPad(seconds)}`;
}

function addPad(num) {
  return num.toString().padStart(2, '0');
}
