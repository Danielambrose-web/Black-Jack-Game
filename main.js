let firstCard = 6
let secondCard = 1
let thirdCard = 7

let cards = [firstCard, secondCard]

let sum = firstCard + secondCard
let hashBlackJack = false
let isAlive = true

let message = ""

messageEl = document.getElementById('message-el')
//sumEl=document.getElementById('sum-el')
sumEl = document.querySelector('#sum-el')
cardsEl = document.querySelector('#card-el')
sumel = document.querySelector('#sum-el')

function startGame() {
    game__init__()
}


function game__init__() {
    sumEl.textContent = 'sum:' + ' ' + sum

    cardsEl.textContent = 'cards:' + '' + cards[0] + " " + cards[1]

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
    sum = sum + thirdCard
    game__init__()
    cards.push(thirdCard)

    //window.alert(cards +' and'+cards.length)
   
}


function reset() {
    sumEl.textContent = "sum:" + '' + 0
    cardsEl.textContent = 'cards:' + '' + 0
    sumel.textContent = 'sum:' + ' ' + 0
}

/*

let x = 20

for( count = 1; count < x; count += 1){
    console.log(count)
}

*/





















