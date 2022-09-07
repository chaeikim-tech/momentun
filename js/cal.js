const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const value = document.querySelector(".value");

const allClear = document.querySelector('.ac');
const plusMinus = document.querySelector("pm");
const percent = document.querySelector(".percent");

const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');


const number0 = document.querySelector('.number-0');
const number1 = document.querySelector('.number-1');
const number2 = document.querySelector('.number-2');
const number3 = document.querySelector('.number-3');
const number4 = document.querySelector('.number-4');
const number5 = document.querySelector('.number-5');
const number6 = document.querySelector('.number-6');
const number7 = document.querySelector('.number-7');
const number8 = document.querySelector('.number-8');
const number9 = document.querySelector('.number-9');

const numberArray = [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9]

const getValueString = () => value.innerText.split(',').join('');

const getValueNumber = () => {
    return parseFloat(getValueString());
}


const setValue = (valueStr) => {
    if (valueStr[valueStr.length - 1] === '.') {
        value.innerText += '.';
        return;
    }
    const [wholeNum, decimalStr] = valueStr.split('.');
    console.log(wholeNum, decimalStr);

    if (decimalStr) {
        value.innerText = parseFloat(wholeNum).toLocaleString() + '.' + decimalStr;
    } else {
        value.innerText = parseFloat(wholeNum).toLocaleString();
    }


    value.innerText = parseFloat(valueStr).toLocaleString();

};

const handleNumberClick = (numStr) => {
    const currentValueStr = getValueString();
    if (currentValueStr === '0') {
        setValue(numStr);
    } else {
        setValue(currentValueStr + numStr)
    }
};

allClear.addEventListener("click", () => {
    setValue('0');
});

percent.addEventListener("click", () => {
    const currentValue = getValueNumber();
    const newValue = currentValue / 100;
    setValue(newValue.toString());
})

for (let i = 0; i < numberArray.length; i++) {
    const numberEl = numberArray[i];
    numberEl.addEventListener('click', () => {
        handleNumberClick(i.toString());
    });
}
decimal.addEventListener('click', () => {
    const currentValueStr = getValueString();
    if (!currentValueStr.includes('.')) {
        setValue(currentValueStr + '.');
    }
})



//상단바 시계
const currentTime = () => {
    const today = new Date();

    let currentHour = today.getHours();
    const currentMinutes = today.getMinutes();

    if (currentHour > 12) {
        currentHour -= 12;
    }
    hour.innerText = currentHour.toString();
    minute.innerText = currentMinutes.toString().padStart(2, '0');
}

setInterval(currentTime, 1000);
currentTime();


