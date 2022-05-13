  const Turn = require('../src/Turn');

  class Round {
    constructor(deck) {
      this.deck = deck.cards;
      this.turnCount = 0;
      this.turn;
      this.incorrectGuesses = [];
    };
    returnCurrentCard() {
      return this.deck[this.turnCount];
    };
    takeTurn(guess) {
      this.turn = new Turn(guess, this.returnCurrentCard());
      this.turnCount++;
      if (!this.turn.evaluateGuess()) {
        this.incorrectGuesses.push(this.turn.card.id);
      };
      return this.turn.giveFeedback();
    };
    calculatePercentCorrect() {
      return (this.deck.length - this.incorrectGuesses.length) / this.deck.length
    };
    endRound() {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
  };

  module.exports = Round;
