const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', event => {
     console.log(event)
     console.log('Вешаю слушателя события на целевую кнопку');

     targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
     console.log(event)
  console.log('снимаю слушателя событий с целевой кнопки')

  targetBtn.removeEventListener('click', onTargetBtnClick)
});

function onTargetBtnClick(event) {
     console.log(event)
     console.log('Клик по целевой кнопке');
}
