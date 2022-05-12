const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.cards = []
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
};
  printQuestion(round) {
      util.main(round);
  };
  startRound() {
    prototypeQuestions.forEach(cardData => {
      let newCard = new Card();
      newCard.reconstructFromObject(cardData)
      this.cards.push(newCard)
    });
    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck);
  };
  start() {
      this.startRound();
      this.printMessage(this.deck, this.currentRound);
      this.printQuestion(this.currentRound);
  };
};

module.exports = Game;
