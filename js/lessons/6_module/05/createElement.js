const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Це заголовок сторінки :)';
console.log("🚀 ~ file: createElement.js:2 ~ titleEl:", titleEl)

// console.log(document.body);

const imageEl = document.createElement('img');
imageEl.src = "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
imageEl.alt = 'mountains';
imageEl.width = 320;
console.log("🚀 ~ file: createElement.js:7 ~ imageEl:", imageEl)

// document.body.appendChild(imageEl);

const heroEl = document.querySelector('.hero');
heroEl.append(titleEl, imageEl);

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item'); 

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nave__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl);

console.log("🚀 ~ file: createElement.js:17 ~ navItemEl:", navItemEl)

const navEl = document.querySelector('.site-nav');

// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);
// navEl.insertBefore(navItemEl, navEl.lastElementChild);
// navEl.insertBefore(navItemEl, navEl.children[1]);