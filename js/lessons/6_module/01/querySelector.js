const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.addEventListener('click', () => {
const navEl = document.querySelectorAll('li');
console.log("🚀 ~ file: querySelector.js:4 ~ navEl:", navEl)
});

// 03 - classList - свойства в котором храниться объект 
// и масив всех клacсов этого элемента
magicBtn.addEventListener('click', () => {
const navEl = document.querySelector('.site-nav');
console.log("🚀 ~ file: querySelector.js:11 ~ navEl:", 
navEl.classList);
// navEl.classList.add('super-cool', 'sfsdfsd');
// navEl.classList.remove('sfsdfsd');
// navEl.classList.toggle('Yahoo');
// navEl.classList.replace('super-cool', 'GFHGFDH');
console.log(navEl.classList.contains('site-nav'));
});

const currentPageUrl = '/contact';

const linkEl = document.querySelector(
     `.site-nav__link[href="${currentPageUrl}"]`,
);

console.log("🚀 ~ file: querySelector.js:25 ~ linkEl:", linkEl);

linkEl.classList.add('site-nav__link--current');