const minutesArea = document.querySelector('.screen-input__minutes');
const secondsArea = document.querySelector('.screen-input__seconds');
const runBtn = document.querySelector('.clock-face__button');

const click = runBtn.addEventListener('click', () => {
    runBtn.disabled = true;
    let timerInitValue = null;

    const startCount = setInterval(() => {
        timerInitValue = parseInt(minutesArea.value) * 60 + parseInt(secondsArea.value);
        timerInitValue--;
        getMinutes = Math.floor(timerInitValue / 60 % 60);
        getSeconds = Math.floor(timerInitValue % 60);
        
        const supFormat = num => num < 10 ? num = '0' + num : num;

        minutesArea.value = supFormat(getMinutes);
        secondsArea.value = supFormat(getSeconds);

        // const isValid = num => {
        //     if(isNaN(num) || num.trim()) {
        //         return num = '00';
        //     }
        //     return num;
        // }

        // secondsArea.value = (isValid(secondsArea.value));
        // minutesArea.value = (isValid(minutesArea.value));

    
        if(timerInitValue <= 0) {
            minutesArea.value = '00';
            secondsArea.value = '00';
            runBtn.disabled = false;
            clearInterval(startCount);
        }
        console.log(minutesArea.value);
        console.log(secondsArea.value);
        console.log(timerInitValue);
    }, 1000);
});