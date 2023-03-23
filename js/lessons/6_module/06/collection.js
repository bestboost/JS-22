/*
 * Создём и добавляем коллекцию
 */
const colorPickerOptions = [
     { label: 'red', color: '#F44336' },
     { label: 'green', color: '#4CAF50' },
     { label: 'blue', color: '#2196F3' },
     { label: 'grey', color: '#607D8B' },
     { label: 'pink', color: '#E91E63' },
     { label: 'indigo', color: '#3F51B5' },
   ];

//    const option = colorPickerOptions[3];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

const elements = colorPickerOptions.map(option =>{
   const buttonEl = document.createElement('button');
   buttonEl.type = 'button';
   buttonEl.classList.add('color-picker__option');
   buttonEl.textContent = option.label; 
   buttonEl.style.backgroundColor = option.color;

   return buttonEl;
});

console.log("🚀 ~ file: collection.js:24 ~ element ~ element:", elements)

colorPickerContainerEl.append(...elements);
   
   