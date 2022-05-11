const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  const deck = new Deck([card1, card2, card3]);
  var round;

  beforeEach( () => {
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should take in a Deck', () => {
    expect(round.deck).to.equal(deck.cards);
  });

  it('should start with the first card in the deck', () => {
    expect(round.returnCurrentCard()).to.equal(round.deck[0]);
  });

  it('should create a new Turn instance when a guess is made', () => {
    round.takeTurn('dogs');
    expect(round.turn.returnGuess()).to.equal('dogs')
  });

  it('should update a turn count regardless of the guess', () => {
    round.takeTurn('dogs');
    round.takeTurn('gallbladder');
    expect(round.turnCount).to.equal(2);
  });

  it('should change current card after each turn', () => {
    round.takeTurn('dogs');
    round.takeTurn('gallbladder');
    expect(round.returnCurrentCard()).to.equal(round.deck[2]);
  });

  it('should evaluate guesses and store incorrect answers in incorrectGuesses', () => {
    round.takeTurn('dogs');
    round.takeTurn('gallbladder');
    expect(round.incorrectGuesses).to.eql([1]);
  });

  it('should give feedback if the answer is correct or incorrect.', () => {
    expect(round.takeTurn('dogs')).to.equal('incorrect!');
    expect(round.takeTurn('gallbladder')).to.equal('correct!');
  });

  it('should be able to calculate the percentage of correct answers', () => {
    round.takeTurn('dogs');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.equal(2/3);
  });

  it('should be able to print out a message at the end of a round', () => {
    round.takeTurn('dogs');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`);
  });
});
