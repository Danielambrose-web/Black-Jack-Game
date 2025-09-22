let firstCard = 6
let secondCard = 1
let thirdCard = 7
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let hashBlackJack = false
let isAlive = true

let message = ""
messageEl = document.getElementById('message-el')
sumEl = document.querySelector('#sum-el')
cardsEl = document.querySelector('#card-el')
sumel = document.querySelector('#sum-el')

function startGame() {
    game__init__()
}


function game__init__() {
    cardsEl.textContent = 'cards:'


    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = 'sum:' + ' ' + sum
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

function newCard() {
    sum +=  thirdCard
    cards.push(thirdCard)
    game__init__()
 
    //window.alert(cards +' and'+cards.length)

}
