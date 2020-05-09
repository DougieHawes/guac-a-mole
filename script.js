const square = document.querySelectorAll('.square')
const avo = document.querySelectorAll('.avo')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('avo')
    })
    let randomPosition = square[Math.floor(Math.random() * 35)]
    randomPosition.classList.add('avo')
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result += 1
            score.textContent = result
        }
    })
})

function moveAvo() {
    let timerId = null
    timerId = setInterval(randomSquare, 800)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER - you have scored ' + result)
    }
}

let timerId = setInterval(countDown, 1000)

moveAvo()