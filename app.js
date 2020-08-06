
//objs and arrays
let squarArray = document.querySelectorAll(".square")
let mole = document.querySelectorAll('.mole')
let timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let count = 60
let result = 0

function randomPick() {
    squarArray.forEach(element => { element.classList.remove("mole") })
    let chossen = squarArray[Math.floor(Math.random() * 9)]
    chossen.classList.add("mole");
    chossenId = chossen.id;
}

squarArray.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === chossenId) {
            result = result + 1
            score.innerHTML = result
            chossenId = null
        }
    })
})

function moveMole() {
    let randomPickInterval = setInterval(randomPick, 500)
    go(randomPickInterval)
}

function startTimer(duration, display, randomPickInterval) {
    let timer = duration, minutes, seconds;
    let timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            alert("time is over your score is: " + result  )
            clearInterval(randomPickInterval);
            clearInterval(timerInterval);
            score.innerHTML  = 0;

        }
    }, 1000);
}

function go(randomPickInterval) {
    var fiveMinutes = 10;
    display = document.querySelector('#time-left');
    startTimer(fiveMinutes, display, randomPickInterval);
};
