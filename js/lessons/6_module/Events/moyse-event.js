const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseover', onMouseEnter);
boxRef.addEventListener('mouseout', onMouseLeave);
boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
     event.currentTarget.classList.add('box--active');
};

function onMouseLeave(event) {
     event.currentTarget.classList.remove('box--active');
};

function onMouseMove(event) {
     console.log(event);
};