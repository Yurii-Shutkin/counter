const input = Array.from(document.getElementsByTagName('input'));
const border = document.querySelector('.clock-face__border')
const minutesArea = document.querySelector('.screen-input__minutes');
const secondsArea = document.querySelector('.screen-input__seconds');
const runBtn = document.querySelector('.clock-face__button');

console.log(input);

const inputFocus = input.forEach(item => {
    item.addEventListener('click', () => {
        item.value = '';
    })
})

const click = runBtn.addEventListener('click', () => {
    let timerInitValue = null;
    border.classList.add('red');
    runBtn.disabled = true;
    input.forEach(item => {
        item.classList.add('falseTarget');
        item.classList.add('white');
    })

    const startCount = setInterval(() => {
        timerInitValue = parseInt(minutesArea.value) * 60 + parseInt(secondsArea.value);
        timerInitValue--;
        getMinutes = Math.floor(timerInitValue / 60 % 60);
        getSeconds = Math.floor(timerInitValue % 60);
        
        const supFormat = num => num < 10 ? num = '0' + num : num;

        minutesArea.value = supFormat(getMinutes);
        secondsArea.value = supFormat(getSeconds);
    
        if(timerInitValue <= 0) {
            input.forEach(item => {
                item.classList.remove('falseTarget');
                item.classList.remove('white');
            })
            runBtn.disabled = false;
            clearInterval(startCount);
        }
        console.log(secondsArea.value);
        console.log(minutesArea.value);
        console.log(timerInitValue);
    }, 1000);
});