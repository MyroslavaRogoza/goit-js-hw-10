import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('input');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const delay = form.elements.delay.value;

  const makePromise = delay => {
    return new Promise((resolve, reject) => {
      setTimeout(
        delay => {
          if (form.elements.state.value === 'fulfilled') {
            resolve(delay);
          } else if (form.elements.state.value === 'rejected') {
            reject(delay);
          }
        },
        delay,
        delay,
      );
    });
  };
  makePromise(delay)
    .then(delay =>
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        backgroundColor: '#59A10D',
        position: 'topRight',
        close: false,
      }),
    )
    .catch(delay =>
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        close: false,
      }),
    );
}
