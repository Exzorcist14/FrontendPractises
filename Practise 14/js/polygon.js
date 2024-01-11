contents.onclick = function (event) {
    let target = event.target.closest("a");
    if (target && contents.contains(target)) {
        let wantToLeave = confirm(`Перейти по ссылке?`);
        if (!wantToLeave) event.preventDefault();
    }
};

/*-----------------------------------------------------------*/

container.onclick = function (event) {
    let img = event.target.closest("img");
    if (!img) return;
    bigImg.src = img.src;
    event.preventDefault();
};

/*-----------------------------------------------------------*/

items.onclick = function (event) {
    if (event.target.tagName !== "LI") return;

    if (event.ctrlKey || event.metaKey) {
        toggleSelect(event.target);
    } else {
        singleSelect(event.target);
    }
};

function toggleSelect(listElement) {
    listElement.classList.toggle("selected");
}

function singleSelect(listElement) {
    let selected = items.querySelectorAll(".selected");
    for (let elem of selected) {
        elem.classList.remove("selected");
    }
    listElement.classList.add("selected");
}

items.onmousedown = function (event) {
    event.preventDefault();
};

/*-----------------------------------------------------------*/

thumbler.onmousedown = function (event) {
    event.preventDefault();
    let cordX = event.clientX - thumbler.getBoundingClientRect().left;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function onMouseMove(event) {
        let changedLeft = event.clientX - cordX - slider.getBoundingClientRect().left;

        let borderRight = slider.offsetWidth - thumbler.offsetWidth;

        if (changedLeft < 0) {
            changedLeft = 0;
        }

        if (changedLeft > borderRight) {
            changedLeft = borderRight;
        }

        thumbler.style.left = changedLeft + "px";
    }

    function onMouseUp() {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
    }
};

/*-----------------------------------------------------------*/

let prods = document.querySelectorAll(".element")
let prodPrice;

prods.forEach(
    prod => {
        prod.addEventListener("dragstart", () => prodPrice = prod.querySelector("span").textContent)
    }
)

let cart = document.querySelector(".bed");
let cartPrice = cart.querySelector("span");
cart.addEventListener("dragover", e => e.preventDefault());

cart.addEventListener("drop", () => cartPrice.textContent = +cartPrice.textContent + +prodPrice)

/*-----------------------------------------------------------*/

document.querySelector("#mainButton").onclick = function animateButton() {
    let mainText = document.querySelector("#mainText")
    animateText(mainText)
}

function animateText(textArea) {
    let text = textArea.value;
    let to = text.length, from = 0;
    animate({
        duration: 5000,
        timing: bounce,
        draw: function (progress) {
            let result = (to - from) * progress + from;
            textArea.value = text.slice(0, Math.ceil(result))
        }
    });
}

function bounce(timeFraction) {
    for (let a = 0, b = 1; ; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

function animate(options) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
        var timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;
        var progress = options.timing(timeFraction)
        options.draw(progress);
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}



let logo = document.querySelector(".logo-img");
let isAnimating = false;

logo.onclick = function () {
    if (!isAnimating) {
        isAnimating = true;
        let timeStart = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - timeStart;
            logo.style.transform = "rotate(" + timePassed + "deg)";
            if (timePassed > 1440) {
                clearInterval(timer);
                isAnimating = false;
            }

            timeStart += 20;
        }, 25);
    }
}


