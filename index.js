
let player = { 
    playerName:"Player",
    playerChips: 200
}
let cards = [] //array - ordered list of items 
let hasBlackJack = false
let isAlive = false
let total = 0
let message = ""
let messageEl = document.getElementById("message-el")
let totalEl = document.getElementById("total-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.innerHTML = player.playerName + ": $" + player.playerChips


function getRandomCard() {
   let randomNumber = Math.floor(Math.random() * 13) + 1             //0.0000-12.999
   if (randomNumber > 10) {
       return 10 
   } else if (randomNumber === 1){
       return 11
   } else{
       return randomNumber
   }
}


function startGame() { 
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    total = firstCard + secondCard
    renderGame()
}

function renderGame() { 
    //render out the first card and second card 
    //loop through the cards array
    cardsEl.innerHTML = "Cards: "
    for (let i = 0; i < cards.length;i++) { 
        cardsEl.innerHTML += cards[i] + " "
    }


    //render out all the cards we have 
    totalEl.innerHTML = "Total: "  + total
    if (total <= 20) { 
        message = 'Do you want to draw a new card?'
    } else if (total === 21) { 
        message = 'Wahoo, you got BLACKJACK'
        hasBlackJack = true
      } else { 
         message = "You are out of the game!"
          isAlive = false
      }
    
    messageEl.innerHTML = message
}

function newCard() { 
    if(isAlive === true && hasBlackJack === false) { 
        let card = getRandomCard()
        total += card 
        cards.push(card)
        renderGame()
    }
 }



