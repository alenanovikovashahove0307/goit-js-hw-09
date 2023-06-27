import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const delayInput = document.querySelector('input[name="delay"]');
  const stepInput = document.querySelector('input[name="step"]');
  const amountInput = document.querySelector('input[name="amount"]');

  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  let currentDelay = delay;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.info(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    currentDelay += step;
  }

  delayInput.value = '';
  stepInput.value = '';
  amountInput.value = '';
}
//   let delay = Number(form.delay.value);

//   for (let i = 1; i <= form.amount.value; i += 1) {
//     createPromise(i, delay)
//       .then(({ position, delay }) => {
//         console.log (`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log (`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     delay += Number(form.step.value);
//   }
// }

function createPromise(position, delay) {
  const obj = { position, delay };
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(obj);
      } else {
        // Reject
        reject(obj);
      }
    }, delay);
  });
}
