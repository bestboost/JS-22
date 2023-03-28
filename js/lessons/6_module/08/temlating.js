const titleEl = document.querySelector('.title');
console.log("🚀 ~ file: temlating.js:2 ~ titleEl:", titleEl.innerHTML);
console.log("🚀 ~ file: temlating.js:2 ~ title:", titleEl.textContent);

// titleEl.innerHTML = '';
// titleEl.innerHTML = '<a href="">Это ссылка )</a>';

titleEl.insertAdjacentHTML('beforeend', '<a href="" class="title__link">Это ссылка )</a>');