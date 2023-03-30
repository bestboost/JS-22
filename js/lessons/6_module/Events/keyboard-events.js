const refs = {
     output: document.querySelector('.js-output'),
     clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', onKeypress);
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
     console.log("event:", event.key);
     refs.output.textContent += event.key;
};

function onClearOutput() {
     refs.output.textContent = '';
};