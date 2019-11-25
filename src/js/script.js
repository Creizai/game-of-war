class Card {
    constructor(rank, suit, value) {
        this.rank = rank
        this.suit = suit
        this.value = value
    }
}

class Deck {
    constructor() {
        this.cards = []

        let ranks = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King",
            "Ace"
        ]

        let suits = [
            "Heart",
            "Club",
            "Diamond",
            "Spade"
        ]

        for (let i = 0; i < ranks.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                let rank = ranks[i]
                let suit = suits[j]
                let value = i

                this.cards.push(new Card(rank, suit, value))
            }
        }

        for (let k = this.cards.length - 1; k > 0; k--) {
            let l = Math.floor(Math.random() * (k + 1)); // random index from 0 to i

            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [this.cards[k], this.cards[l]] = [this.cards[l], this.cards[k]];
        }
    }
}

class GameOfWar {
    constructor(deck) {
        this.playerOne = [];
        this.playerTwo = [];

        // Fills playerOne's deck with the first half of the random cards
        for (var i = 0; i < (deck.length); i+=2) {
            this.playerOne.push(deck[i])
            this.playerTwo.push(deck[i+1])
        }

        console.log("============= Game of War =============");
        console.log(`Player One's card :${this.playerOne[0].suit} ${this.playerOne[0].rank}`);
        console.log(`vs`);
        console.log(`Player Two's card :${this.playerTwo[0].suit} ${this.playerOne[0].rank}`);
        /**
                do {
                    console.log(`Player One's card :${this.playerOne[0].suit} ${this.playerOne[0].rank}`)
                    console.log(`vs`)
                    console.log(`Player Two's card :${this.playerTwo[0].suit} ${this.playerOne[0].rank}`)
                    if (this.playerOne[0].value == this.playerTwo[0].value) {
                        console.log('Tie! Both players place their cards on the bottom of the deck.')
                        this.playerOne.push(this.playerOne[0]);
                        this.playerOne.shift();
                        this.playerTwo.push(this.playerTwo[0]);
                        this.playerTwo.shift();
                    } else if (this.playerOne[0].value > this.playerTwo[0].value) {
                        console.log('Player One wins the hand and takes both cards!')
                        this.playerOne.push(this.playerOne[0]);
                        this.playerOne.shift();
                        this.playerTwo.push(this.playerOne[0]);
                        this.playerTwo.shift();
                    } else if (this.playerOne[0].value < this.playerTwo[0].value) {
                        console.log('Player Two wins the hand and takes both cards!')
                        this.playerOne.push(this.playerTwo[0]);
                        this.playerOne.shift();
                        this.playerTwo.push(this.playerTwo[0]);
                        this.playerTwo.shift();
                    }
                }
                while (this.playerOne.length > 0 && this.playerTwo.length > 0);
                if (this.playerOne.length == 0) {
                    console.log("Player Two Wins!")
                } else if (this.playerTwo.length == 0) {
                    console.log("Player One Wins!")
                }
        */
    }
}

const deck = new Deck()
const game = new GameOfWar(deck.cards)

//Testing deck length
//console.log(game.playerOne.length + " " + game.playerTwo.length)

// Testing proper move to end of array and deletion of element 
/*
console.log(game.playerOne[0].value + " " + game.playerOne[0].rank + " " + game.playerOne[0].suit);
console.log(game.playerOne[1].value + " " + game.playerOne[1].rank + " " + game.playerOne[1].suit);

game.playerOne.push(game.playerOne[0]);
game.playerOne.shift();
console.log(game.playerOne[game.playerOne.length - 1].value + " " + game.playerOne[game.playerOne.length - 1].rank + " " + game.playerOne[game.playerOne.length - 1].suit);

console.log(game.playerOne[0].value + " " + game.playerOne[0].rank + " " + game.playerOne[0].suit);
*/


console.log(deck)
console.log("hello!");
console.log(game)
