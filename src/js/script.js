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

        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}

class GameOfWar {
    constructor(deck) {
        this.playerOne = [];
        this.playerTwo = [];

        // Fills playerOne's deck with the first half of the random cards
        for (var i = 0; i < (deck.length / 2); i++) {
            this.playerOne.push(deck[i])
        }

        // Fills playerTwo's deck with the first half of the random cards
        for (var i = (deck.length / 2) + 1; i < deck.length; i++) {
            this.playerTwo.push(deck[i])
        }
    }
}

const deck = new Deck()
const game = new GameOfWar(deck.cards)

console.log(deck)
console.log("hello!");
console.log(game)