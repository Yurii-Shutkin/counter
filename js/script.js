const getMinutes = document.querySelector('.screen-input__minutes');
const getSeconds = document.querySelector('.screen-input__seconds');
const runBtn = document.querySelector('.clock-face__button');

const click = runBtn.addEventListener('click', () => {
    let timerInitValue = null;
    
    const startCount = function () {
        timerInitValue = parseInt(getMinutes.value) * 60 + parseInt(getSeconds.value);
        timerInitValue--;
        let minutes = Math.floor(timerInitValue / 60 % 60);
        let seconds = Math.floor(timerInitValue % 60);

        getMinutes.value = minutes;
        getSeconds.value = seconds;

        console.log(getMinutes.value);
        console.log(getSeconds.value);
        console.log(timerInitValue);
    };
    startCount()
    setInterval(startCount, 1000);
 });
