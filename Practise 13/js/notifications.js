var timerId = setInterval(newNotification, 3000);

const content = document.querySelector(".notifications-container .notifications-list");
const number = document.querySelector(".notifications-container .notifications-number");

function newNotification() {
    let newNotification = document.createElement("div");
    newNotification.classList.add("notifications-item");
    newNotification.innerHTML = "Письмецо пришло";
    content.append(newNotification);

    number.innerHTML = Number(number.innerHTML) + 1;
}

function delay(func, timerId, interval, delayTime) {
    clearInterval(timerId);
    return setTimeout(function () {
        setInterval(func, interval);
    }, delayTime);
}

var notifications = document.querySelector(".notifications-container");

notifications.onclick = function () {
    timerId = delay(newNotification, timerId, 3000, 10000);
};

/*-----------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const notificationsContainer = document.querySelector(".notification-section");

    function showNotification() {
        let div = document.createElement("div");
        div.className = "notification";

        // Add close button
        let closeButton = document.createElement("button");
        closeButton.className = "close-button";
        closeButton.innerHTML = "×";
        closeButton.addEventListener("click", function () {
            div.remove();
        });

        div.innerHTML = "Всплывающее уведомление!<br>Скоро оно буль-буль";
        div.appendChild(closeButton);

        notificationsContainer.appendChild(div);

        setTimeout(function () {
            div.remove();
        }, 1500);
    }

    setInterval(() => {
        showNotification();
    }, 3000);
});