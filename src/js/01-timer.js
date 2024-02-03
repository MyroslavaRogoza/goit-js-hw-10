// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');

btnStart.setAttribute('disabled', 'true');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      btnStart.removeAttribute('disabled');
          
    } else {
      window.alert('Please choose a date in the future');
      btnStart.setAttribute('disabled', 'true');
    }
    return selectedDates[0];
  },
};
flatpickr(input, options);
userSelectedDate = null || options.onClose();
console.log(userSelectedDate);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

btnStart.addEventListener('click', onStartBtnClick);

function onStartBtnClick(futureDate) {
  const currentTime = Date.now();
  //   const diff= futureDate-currentTime;
  //   console.log(futureDate);
  const intervalId = setInterval(() => {
    // const timeObj = convertMs(diff);
    //  return timeObj;
  }, 1000);
}

onStartBtnClick(userSelectedDate);

/*
 const intervalId = setInterval((futureDate)=>{
       
    console.log(convertMs(futureDate - currentTime));
    console.log(futureDate);

},
1000, userSelectedDate)*/