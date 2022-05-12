const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  const newGame = new Game();
  newGame.start()
  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });
  it('should be an instance of Game', () => {
    expect(newGame).to.be.an.instanceof(Game);
  });
  it('should create cards on start', () => {

    expect(newGame.cards.length).to.equal(prototypeQuestions.length);
  })
  it('should create a deck on start', () => {
    expect(newGame.deck).to.be.an.instanceof(Deck);
  })
  it('should create a round on start', () => {
    expect(newGame.currentRound).to.be.an.instanceof(Round);
  })
  //should invoke printMessage
  //should invokePrintQuestion
});
