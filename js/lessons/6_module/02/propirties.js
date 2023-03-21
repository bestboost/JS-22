const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.addEventListener('click', () => { 
const imageEl = document.querySelector('.hero__image');
console.log("🚀 ~ file: propirties.js:4 ~ imageEl:", imageEl)
imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480'
imageEl.alt = 'Це новиї котик';

const heroTiltelEl = document.querySelector('.hero__title');
heroTiltelEl.textContent = 'Sweety Cat';
});

const actions = document.querySelectorAll('.js-actions button');
console.log("🚀 ~ file: propirties.js:14 ~ actions:", actions)
console.log("🚀 ~ file: propirties.js:14 ~ actions:", actions[1].dataset.action)

magicBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('.js-input');
  console.log(inputEl.value);
  inputEl.value = "New!!"
});