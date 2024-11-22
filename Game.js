let cnum = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
let attemptData = document.getElementById("attempt");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resBtn = document.getElementById("resBtn");
let message = document.getElementById("msg");

let startMenu = document.getElementById("start-menu");
let gameContainer = document.getElementById("game-container");
let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function() {
    startMenu.style.display = "none";
    gameContainer.style.display = "block";
});

function check() {
    let usernum = parseInt(userinp.value);
    attempt++;
    attemptData.innerHTML = attempt;

    if (cnum === usernum) {
        message.innerHTML = "🎉 Congratulations! You've guessed the number!";
        message.style.color = "green";
        resBtn.style.display = "block";
        subBtn.disabled = true;
    } else if (cnum < usernum) {
        message.innerHTML = "🔺 Too high! Try again.";
        message.style.color = "red";
    } else {
        message.innerHTML = "🔻 Too low! Try again.";
        message.style.color = "red";
    }
}

function restart() {
    cnum = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    attemptData.innerHTML = attempt;
    message.innerHTML = "";
    resBtn.style.display = "none";
    subBtn.disabled = false;
    userinp.value = "";
}

subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart);