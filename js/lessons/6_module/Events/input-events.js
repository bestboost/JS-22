const refs = {
     input: document.querySelector('.js-input'),
     nameLable: document.querySelector('.js-button > span'),
     licenseChackbox: document.querySelector('.js-license'),
     btn: document.querySelector('.js-button'),
}

refs.input.addEventListener('input', onInputChange);
refs.licenseChackbox.addEventListener('change', onLicenseChange);
// refs.btn.addEventListener('click', onInputSubmit);

function onInputChange(event) {
   console.log(event.currentTarget.value);
   refs.nameLable.textContent = event.currentTarget.value;
};

function onLicenseChange(event) {
     refs.btn.disabled = !event.currentTarget.checked
};

// function onInputSubmit(event) {
//      console.log('Information sent');
//      location.reload();
// };

     
