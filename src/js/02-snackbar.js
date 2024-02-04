import iziToast from 'izitoast';

const form = document.querySelector('.form');
const input = document.querySelector('input');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const delay = form.elements.delay.value;

  const makePromise = delay => {
    return new Promise((resolve, reject) => {
      setTimeout(delay => {
        if (form.elements.state.value === 'fulfilled') {
          resolve(delay);
        } else if (form.elements.state.value === 'rejected') {
          reject(delay);
        }
      }, delay, delay);
    });
  };

  makePromise(delay)
    .then(delay =>
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        backgroundColor: '#59A10D',
      }),
    )
    .catch(delay => console.log(delay));
}

//`❌ Rejected promise in ${delay}ms`
// flatpickr(input, options);
//
// input.addEventListener('input', inputHandler);
// function inputHandler(evt){
//     const inputNamber = evt.target.value;
//     console.log(inputNamber);
//     return inputHandler;
// }
// input.addEventListener('input', inputHandler);
