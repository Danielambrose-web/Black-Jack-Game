let firstCard = 23
let secondCard = 1
let sum = firstCard + secondCard
let hashBlackJack = false
let isAlive = true
let message = ""
messageEl = document.getElementById('message-el')
//sumEl=document.getElementById('sum-el')
sumEl = document.querySelector('#sum-el')
cardsEl = document.getElementById('card')

function startGame() {
    cardsEl.textcontent = 'cards:' + firstCard +''+ secondCard
    sumEl.textContent += sum

    if (sum <= 20) {
        message = 'do u want to draw a new card'
    }
    else if (sum === 21) {
        message = 'woo u got a blackjack'
        hashBlackJack = true
    }
    else if (sum > 21) {
        message = ' u are out'
        isAlive = false
    }

    messageEl.textContent = message
}






























