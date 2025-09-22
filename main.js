let firstCard = getrandomCard()
let secondCard = getrandomCard()

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

function getrandomCard() {
    let Gene = Math.floor(Math.random() * 13) + 1
    if (Gene == 1) {
        return 11
    } else if (Gene == 11 
        || Gene == 12
        || Gene == 13) {
        return 10
    }
        else {
        return Gene
        }
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
        let thirdCard = getrandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        game__init__()

        //window.alert(cards +' and'+cards.length)

    }
