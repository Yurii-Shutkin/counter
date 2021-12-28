'use strict';

const inputs = Array.from(document.getElementsByTagName('input'));
const border = document.querySelector('.clock-face__border');
const minutesArea = document.querySelector('.screen-input__minutes');
const secondsArea = document.querySelector('.screen-input__seconds');
const runBtn = document.querySelector('.clock-face__button');

inputs.forEach(item => {
    item.oninput = function() {
        this.value = this.value.substr(0, 2);
        if(this.value.length === 2) inputs[1].focus();
        if(inputs[1].value.length === 2) inputs[1].blur();
    };
})

const inputFocus = inputs.forEach(item => {
    item.addEventListener('click', () => {
        border.classList.add('green');
        if(inputs[1].focus) inputs[1].value = '';
        item.value = '';
    });
});

const click = runBtn.addEventListener('click', () => {
    
    border.classList.add('red');
    runBtn.disabled = true;
    inputs.forEach(item => {
        item.classList.add('falseTarget');
        item.classList.add('white');
        if(item.value === '') item.value = item.placeholder;
        if(item.value.length === 1) item.value = '0' + item.value; 
        if(item.value > item.max) item.value = item.max;
    });    
        
    let timerInitValue = parseInt(minutesArea.value) * 60 + parseInt(secondsArea.value);
    const startValue = timerInitValue;
    const startCount = setInterval(() => {
        timerInitValue--;
        const getMinutes = Math.floor(timerInitValue / 60 % 60);
        const getSeconds = Math.floor(timerInitValue % 60);

         border.style.background = `conic-gradient(
            #900A0A ${360 * timerInitValue / startValue}deg,
            #27252c ${360 * timerInitValue / startValue}deg
        )`

        const supFormat = num => num < 10 ? num = '0' + num : num;
        minutesArea.value = supFormat(getMinutes);
        secondsArea.value = supFormat(getSeconds);
    
        if(timerInitValue <= 0) {
            border.style.removeProperty('background');
            inputs.forEach(item => {
                item.classList.remove('falseTarget', 'white');
                item.value = '';
            });
            border.classList.remove('green');
            border.classList.remove('red');
            runBtn.disabled = false;
            clearInterval(startCount);
        };
    }, 1000);
});