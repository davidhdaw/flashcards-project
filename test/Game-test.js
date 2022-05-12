const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  const fullDeck = new Deck([card1, card2, card3]);
  const shortDeck = new Deck([card1, card2]);
  const cardArray = [card1, card2, card3];
  const newGame = newGame();

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });
  it('should be an instance of Game', () => {
    expect(newGame).to.be.an.instanceof(Game);
  });
  it('should create cards on start' () => {
    newGame.start()
    expect(newGame.cardsArry).to.be.a('array');
  })
  it('should create a deck on start' () => {
    newGame.start()
    expect(newGame.deck).to.be.an.instance(Deck);
  })
  it('should create a round on start' () => {
    newGame.start()
    expect(newGame.currentRound).to.be.an.instance(Round);
  })
  //should invoke printMessage
  //should invokePrintQuestion
});
