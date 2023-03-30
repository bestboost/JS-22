const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
     event.preventDefault();

     // console.log('Это сабмит формы');

     // const FormElements = event.currentTarget.elements.subscription.value;
     // console.log("FormElements:", FormElements)

     const formData = new FormData(event.currentTarget);
     console.log("formData:", formData);

     formData.forEach((value, name) => {
          console.log("name:", name);
          console.log("value:", value);
          
     });
};
     
     
