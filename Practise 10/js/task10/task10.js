function genText() {
    let length = 5;
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    let pos;
    for (let i = 0; i < length; i++) {
        pos = Math.floor(Math.random() * chars.length);
        result += chars[pos];
    }

    return result;
}

function genNum() {
    let num1 = Math.round(Math.random() * 50 + 1);
    let num2 = Math.round(Math.random() * 50 + 1);
    return [num1 + num2, `${num1} + ${num2}`];
}

function isEmpty(obj) {
    for (let elem of obj) {
        return false;
    }

    return true;
}

const captchaText = document.querySelector(".form p");

var answer = genText();
var isAllowedToSend = false;
captchaText.innerHTML = answer;

function processInput() {
    var input = document.querySelector(".form .input-block input");
    const value = input.value;

    if (isEmpty(value)) {
        alert("Введите капчу");
    }

    else if (answer == value) {
        isAllowedToSend = true;

        let captchaBtn = document.getElementById("send-captcha");
        captchaBtn.innerHTML = "Верно!";
        captchaBtn.style.background = "rgb(135,232,188)";
    }

    else {
        alert("Введен ошибочный ответ");

        input.value = "";
        funcRes = genNum();
        answer = funcRes[0];
        captchaText.innerHTML = funcRes[1];
    }
}

/*-----------------------------------------------------------*/

function Accumulator() {
    this.value = 0;

    this.read = function() {
        this.value += +prompt("Введите количество");
    };
}

let accumulator = new Accumulator(1);
document.querySelector("#submit").onclick = function() {
    let summ = document.querySelector(".cont_sum .summ")

    accumulator.read();
    summ.innerHTML = accumulator.value;
}

/*-----------------------------------------------------------*/

const allContent = document.querySelectorAll(".card__desc");

function trunc(str, maxLength) {
    if (str.length > maxLength) {
        return `${str.slice(0, maxLength-1)}…`;
    }

    else {
        return str;
    }
}

allContent.forEach((content) => {
    content.innerHTML = trunc(content.innerText, 100);
});


